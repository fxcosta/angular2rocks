import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import { NgSemanticModule } from "ng-semantic";

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})

export class TwitterComponent implements OnInit {

  public tweets: Object[] = [];
  public name: string;

  public hideElement: boolean;


  constructor() {

  }

  onTweet(tweet: HTMLInputElement) {
    this.tweets.push({ value: tweet.value, date: new Date()});
    tweet.value = null;
  }

  ngOnInit() {
    this.hideElement = true;
  }

}
