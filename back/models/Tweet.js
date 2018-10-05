import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Tweet = new Schema({
    username: {
        type: String
    },
    tweet_message: {
        type: String 
    },
    comments: {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Tweet', Tweet);
