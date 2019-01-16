const jwt = require('jsonwebtoken');
const secret = 'fjfjfjjfjfj456574';

let countries = [];

function generateJWTToken(user) {
    const payload = {
      email: user.email,
    };
  
    const token = jwt.sign(payload, secret, {
      expiresIn: 30 * 60 * 60
    });
  
    return {
      profile: payload,
      token: token
    };
  }

module.exports = {
    
    verifyLogin: function(req, res) {
        // verifies secret and checks exp
        if(req.body.username == 'admin' && req.body.password == 'admin'){
            const user = {
                email : req.body.email   
            };
            return res.send(generateJWTToken(user));
        }   
          
    },

    getCountries: (req,res) =>{
        return res.send(countries);
    },

    putCountries: (req,res) =>{
        countries.push(req.body.country);
        return res.send(countries);
    },
    deleteCountries: (req,res) =>{
        countries.forEach((country,index) =>{
            if(country === req.body.country){ 
                countries.splice(index,1);
                return res.send(countries)
            }
        })
    }
}