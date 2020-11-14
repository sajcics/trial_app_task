import React, { PureComponent } from 'react';

import Box from 'components/Box';

/**
 * because functional React components do not support error
 * boundaries this class component is wrapped on all UI components to
 * prevent crashing whole application, but instead will only show
 * error message on component that was crashed and application
 * can normally used.
 */
export default class ErrorUI extends PureComponent {
  state = {
    error: false,
  };

  render() {
    if (this.state.error) {
      return <Box>Upppsss...Sorry about UI error.</Box>;
    }

    return this.props.children;
  }

  componentDidCatch(error, errorInfo) {
    console.error(error);
    this.setState({
      error: true,
    });
  }
}
