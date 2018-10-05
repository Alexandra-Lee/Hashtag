import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Tweet } from '../../tweet.service';
import { TweetService } from '../../tweet.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tweets: Tweet[];
  displayedColumns = ['username', 'tweet_message', 'comments'];

  constructor(private tweetService: TweetService, private router: Router) { }

  ngOnInit() {
    this.fetchTweets();
  }
fetchTweets() {
  this.tweetService
  .getTweets()
  .subscribe((data: Tweet[]) => {
    this.tweets = data;
    console.log('Data requested ...');
    console.log(this.tweets);
  });
}

editTweet(id) {
  this.router.navigate([`/edit/${id}`]);
}

deleteTweet(id) {
  this.tweetService.deleteTweet(id).subscribe(() => {
    this.fetchTweets();
  });
}
}

