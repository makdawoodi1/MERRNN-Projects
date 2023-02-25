import express from "express";
import { verifyToken } from "../middleware/index.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

const router = express.Router();

// READ
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId', verifyToken, getUserPosts);

// UPDATE
router.patch('/:id', likePost);

export default router;