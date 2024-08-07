import mongoose from "mongoose"

const tweetSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        caption: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default: ""
        },
        likes: {
            type: Number,
            default: 0
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        reTweets: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        timestamps: true
    }
);

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;