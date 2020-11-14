export default (req, res) => {
  res.statusCode = 200;
  res.json({
    message: 'ok',
    status: 'success'
  });
}