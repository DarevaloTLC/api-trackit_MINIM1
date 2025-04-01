import { ObjectId, Schema, model } from "mongoose";

export interface IComment {
    _id?: ObjectId;
    text: string;
    user: ObjectId;
    packet: ObjectId;
    createdAt: Date;
}

const commentSchema = new Schema<IComment>({
    text: { 
        type : String,
        required: true,
        trim: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    packet: {
        type: Schema.Types.ObjectId,
        ref: 'Packet',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const CommentModel = model("Comment", commentSchema);