const{Router} = require ('express');
const router=Router();

users=require('../controllers/users.controllers');

router.get('/', users.getUsersAll);
//router.post('/users', );
//router.put('', );
//router.delete('',);


module.exports = router;