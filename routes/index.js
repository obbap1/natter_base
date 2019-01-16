var express = require('express');
var router = express.Router();

const controller = require('../controllers/auth-controller')
const middleware = require('../middlewares/auth-middleware')
/* GET home page. */

router.post('/login', controller.verifyLogin);
router.get('/countries',middleware.validateToken,controller.getCountries);
router.put('/countries',middleware.validateToken,controller.putCountries);
router.delete('/countries',middleware.validateToken,controller.deleteCountries);

module.exports = router;
