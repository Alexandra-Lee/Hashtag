import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../tweet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private tweetService: TweetService, private router: Router) { }

  ngOnInit() {
  }

}
