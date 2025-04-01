import { Request, Response } from 'express';
import { IComment } from '../models/comment';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';


const commentService = new CommentService();

export async function postComment (req: Request, res: Response): Promise<void> {
    try {
        const comment = req.body as IComment
        const newComment = await commentService.postComment(comment);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: "Error creating comment", error });
    }
}

export async function getAllComments(req: Request, res: Response): Promise<void> {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const { totalComments, totalPages, currentPage, data } = await commentService.getAllComments(page, limit);
        res.status(200).json({ totalComments, totalPages, currentPage, data });
    } catch (error) {
        res.status(400).json({ message: "Error getting comments", error });
    }
}
export async function getCommentById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const comment = await commentService.getCommentById(id);
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ message: "Error getting comment", error });
    }
}
export async function updateCommentById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const comment = req.body as IComment;
        const updatedComment = await commentService.updateCommentById(id, comment);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({ message: "Error updating comment", error });
    }
}
export async function deleteCommentById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const deletedComment = await commentService.deleteCommentById(id);
        res.status(200).json(deletedComment);
    } catch (error) {
        res.status(400).json({ message: "Error deleting comment", error });
    }
}
