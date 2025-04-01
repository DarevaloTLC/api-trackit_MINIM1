"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    packet: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Packet',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
exports.CommentModel = (0, mongoose_1.model)("Comment", commentSchema);
