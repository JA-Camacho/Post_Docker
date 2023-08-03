const{Router} = require ('express');
const router=Router();

posts=require('../controllers/posts.controllers');

router.get('/', posts.getPostsAll);
router.get('/:id', posts.getPostId);
router.post('/', posts.CreatePost);
//router.put('', );
router.delete('/:id', posts.DeletePostId);


module.exports = router;