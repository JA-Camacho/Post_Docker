const{Router} = require ('express');
const router=Router();

users=require('../controllers/users.controllers');

router.get('/', users.getUsersAll);
router.get('/unique/:user', users.getUser);
router.post('/', users.CreateUser);
//router.put('', );
router.delete('/:id', users.DeleteUserId);


module.exports = router;