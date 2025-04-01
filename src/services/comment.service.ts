import { IComment, CommentModel } from "../models/comment";



export class CommentService {
    async postComment(comment: Partial<IComment>): Promise<IComment> {
        const newComment = new CommentModel(comment);
        return await newComment.save();
    }

    async getAllComments(page: number, limit: number): Promise<{
        totalComments: number;
        totalPages: number;
        currentPage: number;
        data: IComment[];
    }> {
        const skip = (page - 1) * limit;

        const totalComments = await CommentModel.countDocuments({});

        const comments = await CommentModel.find().skip(skip).limit(limit);

        return {
            totalComments,
            totalPages: Math.ceil(totalComments / limit),
            currentPage: page,
            data: comments,
        };
    }
    async getCommentById(id: string): Promise<IComment | null> {
        return await CommentModel.findById(id);
    }
    async updateCommentById(id: string, comment: Partial<IComment>): Promise<IComment | null> {
        return await CommentModel.findOneAndUpdate({ _id: id }, comment, { new: true });
    }
    async deleteCommentById(id: string): Promise<IComment | null> {
        return await CommentModel.findByIdAndDelete(id);
    }



}
