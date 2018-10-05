import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { TweetService } from '../../tweet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  tweet: any = {};
  updateForm: FormGroup;

  constructor(private tweetService: TweetService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.tweetService.getTweetById(this.id).subscribe(res => {
        this.tweet = res;
        this.updateForm.get('username').setValue(this.tweet.username);
        this.updateForm.get('tweet_message').setValue(this.tweet.tweet_message);
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      username: '',
      tweet_message: '',
    });
  }

  updateTweet(username, tweet_message, comments) {

    this.route.params.subscribe(params => {
      this.tweetService.updateTweet(username, tweet_message, comments, params['id']);
      this.router.navigate(['list']);
   });
}
}
