import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Tweet {
  id: String;
  usename: String;
  tweet_message: String;
  comments: Number;
}
@Injectable({
  providedIn: 'root'
})
export class TweetService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getTweets() {
    return this.http.get(`${this.uri}/tweets`);
  }

  getTweetById(id) {
    return this.http.get(`${this.uri}/tweets/${id}`);
  }

  addTweet(username, tweet_message) {
    const tweet = {
      username: username,
      tweet_message: tweet_message,
    };
    return this.http.post(`${this.uri}/tweets/add`, tweet);
  }

  updateTweet(id, username, tweet_message, comments) {
    const tweet = {
      username: username,
      tweet_message: tweet_message,
      comments: comments
    };
    return this.http.post(`${this.uri}/tweets/update/${id}`, tweet);
  }
  // updateTweet(id, username, tweet_message, comments) {

  //   const tweet = {
  //     username: username,
  //     tweet_message: tweet_message,
  //     comments: comments
  //   };
  //   this
  //     .http
  //     .post(`${this.uri}/update/${id}`, tweet)
  //     .subscribe(res => console.log('Done'));
  // }

  deleteTweet(id) {
    return this.http.get(`${this.uri}/tweets/delete/${id}`);
  }
}
