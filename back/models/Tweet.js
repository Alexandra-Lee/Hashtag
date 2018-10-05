// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let TweetSchema = new Schema({
    username: {
        type: String
    },
    tweet_message: {
        type: String
    },
    comments: {
        type: Number,
        default: 0
    }
});
Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;
// export default mongoose.model('Tweet', Tweet);