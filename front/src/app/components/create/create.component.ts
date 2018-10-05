import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TweetService } from '../../tweet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  tweet_message: any;
  constructor(private tweetService: TweetService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      username: '',
      tweet_message: '',
    });
  }

  addTweet(username, tweet_message) {
    this.tweetService.addTweet(username, tweet_message).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
