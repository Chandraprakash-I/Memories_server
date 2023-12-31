import express from 'express';
import { getPost,getPosts,createPost,updatePost,deletePost,likePost,getPostsBySearch,commentPost} from '../controllers/posts.js';
const router=express.Router();
import auth from '../middleware/auth.js';

router.get('/search',getPostsBySearch);
router.get('/:id',getPost);
router.get('/',getPosts);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likepost',auth,likePost);
router.post('/:id/commentPost',auth,commentPost);

export default router;