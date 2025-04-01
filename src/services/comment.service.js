"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const comment_1 = require("../models/comment");
class CommentService {
    postComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const newComment = new comment_1.CommentModel(comment);
            return yield newComment.save();
        });
    }
    getAllComments(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const skip = (page - 1) * limit;
            const totalComments = yield comment_1.CommentModel.countDocuments({});
            const comments = yield comment_1.CommentModel.find().skip(skip).limit(limit);
            return {
                totalComments,
                totalPages: Math.ceil(totalComments / limit),
                currentPage: page,
                data: comments,
            };
        });
    }
    getCommentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_1.CommentModel.findById(id);
        });
    }
    updateCommentById(id, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_1.CommentModel.findOneAndUpdate({ _id: id }, comment, { new: true });
        });
    }
    deleteCommentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_1.CommentModel.findByIdAndDelete(id);
        });
    }
}
exports.CommentService = CommentService;
