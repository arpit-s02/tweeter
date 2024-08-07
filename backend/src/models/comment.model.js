import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        replies: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;