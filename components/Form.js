import React, { useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { validateAll } from 'indicative/validator';

const messages = {
  required: '{{ field }} is required',
  max: '{{ field }} can have maximum {{args}} characters',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'all-good':
      return {
        fieldErrors: {},
        formError: null,
        loading: false,
      };

    case 'sending-data':
      return {
        ...state,
        loading: true,
      };

    case 'set-field-errors':
      return {
        ...state,
        fieldErrors: action.fieldErrors,
        loading: false,
      };

    case 'set-form-error':
      return {
        ...state,
        formError: action.formError,
        loading: false,
      };
  }
};

/**
 * this component is used when we have forms and handles validation to
 * all inputs (that are passed as children). All inputs that wants to
 * send to backend has to have property `name`, otherwise values will not
 * be send. Component returns values:
 *  **** loading - if some request was send to backend. it will be true until
 *  response from backend comes
 *  **** formError - displays if some error happened on backend or form itself
 *  **** fieldErrors - when validation fails it will return validation errors
 */
const Form = (props) => {
  const { rules = {}, url, children = undefined, onSuccess = undefined } = props;

  const [{ loading, formError, fieldErrors }, dispatch] = useReducer(reducer, {
    loading: false,
    formError: null,
    fieldErrors: {},
  });

  const sendData = (data) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 'ok') {
          dispatch({
            type: 'all-good',
          });

          if (typeof onSuccess === 'function' && onSuccess) {
            onSuccess(json.data || {});
          }

          return true;
        }

        if (json.status === 'error' && json.fields) {
          dispatch({
            type: 'set-field-errors',
            fieldErrors: json.fields || {},
          });

          return true;
        }

        throw Error();
      })
      .catch(() => {
        dispatch({
          type: 'set-form-error',
          formError: 'Something went wrong. Contact developer.',
        });
      });

    return false;
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const data = {};

    const { target: form } = e;
    const formData = new FormData(form);

    for (const [key, value] of formData) {
      data[key] = value && typeof value === 'string' ? value.trim() : value;
    }

    validateAll(data, rules, messages)
      .then(() => {
        dispatch({
          type: 'sending-data',
        });

        sendData(data);
      })
      .catch((err) => {
        const errors = {};

        for (const e of err) {
          errors[e.field] = e.message;
        }

        dispatch({
          type: 'set-field-errors',
          fieldErrors: errors,
        });
      });

    return true;
  }, []);

  const formValues = {
    loading,
    formError,
    fieldErrors,
  };

  return (
    <form onSubmit={handleSubmit} method="post" action={url}>
      {children(formValues)}
    </form>
  );
};

Form.propTypes = {
  rules: PropTypes.shape({}),
  url: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  children: PropTypes.any,
};

export default Form;
