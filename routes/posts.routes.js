const{Router} = require ('express');
const router=Router();

posts=require('../controllers/posts.controllers');

router.get('/posts', posts.getPostsAll);
//router.post('/posts', );
//router.put('', );
//router.delete('',);


module.exports = router;