import { Router } from "express";


const router = Router();

import {
    postComment, 
    getAllComments, 
    getCommentById, 
    deleteCommentById, 
    updateCommentById, 
} from '../controllers/comment.controller';

router.post("/", postComment);
router.get("/", getAllComments);
router.get('/:id', getCommentById);
router.put('/:id', updateCommentById);
router.delete('/:id', deleteCommentById);

export default router;