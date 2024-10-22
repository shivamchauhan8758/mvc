var express = require('express');
var router = express.Router();

var user = require('../controller/usercontroller');


router.post('/',user.index);
router.get('/',user.get_data);
router.get('/delete/:id',user.delete_data);
router.get('/update/:id',user.get_update_data);
router.post('/update/:id',user.update_data);

//login
router.post('/login',user.login);

//logout
router.get('/logout',user.logout);


module.exports = router;
