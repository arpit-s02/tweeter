import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            default: ""
        },
        profilePicture: {
            type: String,
            default: ""
        },
        coverImage: {
            type: String,
            default: ""
        },
        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        savedTweets: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Tweet'
            }
        ]
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export default User;