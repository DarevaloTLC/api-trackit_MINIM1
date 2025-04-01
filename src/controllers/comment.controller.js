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
exports.postComment = postComment;
exports.getAllComments = getAllComments;
exports.getCommentById = getCommentById;
exports.updateCommentById = updateCommentById;
exports.deleteCommentById = deleteCommentById;
const comment_service_1 = require("../services/comment.service");
const commentService = new comment_service_1.CommentService();
function postComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const comment = req.body;
            const newComment = yield commentService.postComment(comment);
            res.status(201).json(newComment);
        }
        catch (error) {
            res.status(400).json({ message: "Error creating comment", error });
        }
    });
}
function getAllComments(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const { totalComments, totalPages, currentPage, data } = yield commentService.getAllComments(page, limit);
            res.status(200).json({ totalComments, totalPages, currentPage, data });
        }
        catch (error) {
            res.status(400).json({ message: "Error getting comments", error });
        }
    });
}
function getCommentById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const comment = yield commentService.getCommentById(id);
            res.status(200).json(comment);
        }
        catch (error) {
            res.status(400).json({ message: "Error getting comment", error });
        }
    });
}
function updateCommentById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const comment = req.body;
            const updatedComment = yield commentService.updateCommentById(id, comment);
            res.status(200).json(updatedComment);
        }
        catch (error) {
            res.status(400).json({ message: "Error updating comment", error });
        }
    });
}
function deleteCommentById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const deletedComment = yield commentService.deleteCommentById(id);
            res.status(200).json(deletedComment);
        }
        catch (error) {
            res.status(400).json({ message: "Error deleting comment", error });
        }
    });
}
