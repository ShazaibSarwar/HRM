const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWTKEY;

module.exports = (req, res, next) => {
    console.log(req.headers["authorization"]);
    const Header = req.headers["authorization"];
  
    if (typeof Header !== "undefined") {
      // decodedData = jwt.decode(req.headers['authorization']);
      // if(decodedData.Account)
      jwt.verify(Header, jwtKey, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          console.log(authData);
          if (authData.Account == 1) {
            next();
          } else {
            res.sendStatus(403);
          }
        }
      });
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }
  