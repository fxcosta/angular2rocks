import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})

export class TwitterComponent implements OnInit {

  public tweets: Object[] = [];

  constructor() {
  }

  onTweet(tweet: HTMLInputElement) {
    this.tweets.push({ value: tweet.value, date: new Date()});
    tweet.value = null;
  }

  ngOnInit() { }
}
