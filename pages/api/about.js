const {getUserData} = require('../../database/methods');
const validate = require('validate.js')

export default async (req, res) => {
  const rules = {
    'id': {
      presence: true,
    },
    'jwt': {
      presence: true
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

  const {jwt, id} = data;

  try {
    const results  = await getUserData({jwt, id});

    const {user} = results.data;
    res.statusCode = 200;
    res.json({
      status: 'ok',
      data: {...user}
    });

    return;
  } catch (err) {
    res.statusCode = 400;
    res.json({
      message: 'Database error. Try again',
      status: 'error',
      detailed: err
    });
    return;
  }
}