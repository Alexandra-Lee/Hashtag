import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Tweet from './models/Tweet';
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/tweets',  { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/tweets').get((req, res) => {
    Tweet.find((err, tweets) => {
        if (err)
            console.log(err);
        else
            res.json(tweets);
    });
});

router.route('/tweets/:id').get((req, res) => {
    Tweet.findById(req.params.id, (err, tweet) => {
        if (err)
            console.log(err);
        else
            res.json(tweet);
    })
});

router.route('/tweets/add').post((req, res) => {
    let tweet = new Tweet(req.body);
    tweet.save()
        .then(tweet => {
            res.status(200).json({'tweet': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new tweet');
        });
});

router.route('/tweets/update/:id').post((req, res) => {
    Tweet.findById(req.params.id, (err, tweet) => {
        if (!tweet)
            return next(new Error('Could not load your tweet'));
        else {
            tweet.username = req.body.username;
            tweet.tweet_message = req.body.tweet_message;
            tweet.comments = req.body.comments;

            tweet.save().then(tweet => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/tweets/delete/:id').get((req, res) => {
    Tweet.findByIdAndRemove({_id: req.params.id}, (err, tweet) => {
        if (err)
            res.json(err);
        else
            res.json('Tweet has been removed');
    });
});

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));