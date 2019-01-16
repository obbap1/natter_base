const jwt = require('jsonwebtoken');
const secret = 'fjfjfjjfjfj456574';

module.exports = {
  validateToken: (req, res, next) => {
    // check header or url parameters or post parameters for token
    let token = req.body.token || req.query.token || req.headers.authorization;

    // decode token
    if (!token) return res.status(401).send('You are not logged in.');

    token = token.replace('Bearer ', '');

    // verifies secret and checks exp
    jwt.verify(token, secret, (err, decoded) => {
      if (err) return res.status(401).send('You are not logged in.');

          console.log(decoded);

          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
       
    });
  }
};
