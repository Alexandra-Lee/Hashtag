import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Tweet } from '../../tweet.service';
import { TweetService } from '../../tweet.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  displayedColumns = ['username', 'tweet_message', 'comment_message'];
  constructor(private tweetService: TweetService, private router: Router) { }

  ngOnInit() {
  }

}
