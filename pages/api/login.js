const validate = require('validate.js')
const {sendLoginData} = require('../../database/methods');

export default async (req, res) => {
  const rules = {
    'username': {
      presence: true,
      length: {
        maximum: 30
      }
    },
    'password': {
      presence: true,
      length: {
        maximum: 30
      }
    }
  }

  const {body: data} = req;

  try {
    await validate.async(data, rules)
  } catch(err) {
    res.statusCode = 400;
    res.json({
      message: err,
      status: 'error'
    });
    return;
  }

  const {password, username} = data;

  try {
    const results  = await sendLoginData({password, username});

    const {login: {jwt, user: {id}}} = results.data;
    res.statusCode = 200;
    res.json({
      status: 'ok',
      data: {
        id,
        jwt
      }
    });
  } catch (err) {
    console.log(err);
    res.statusCode = 400;
    res.json({
      message: 'Database error. Try again',
      status: 'error',
      detailed: err
    });
  }
};