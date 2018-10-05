import { Component, OnInit } from '@angular/core';
import { TweetService } from '../../tweet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private tweetService: TweetService, private router: Router) { }

  ngOnInit() {
  }

}
