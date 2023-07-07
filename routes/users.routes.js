const{Router} = require ('express');
const router=Router();

users=require('../controllers/users.controllers');

router.get('/users', users.getUsersAll);
router.get('/:id', users.getUserId);
router.post('/users', users.CreateUser);
//router.put('', );
router.delete('/:id', users.DeleteUserId);


module.exports = router;