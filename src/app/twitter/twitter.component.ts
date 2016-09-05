import { Component, OnInit, ViewContainerRef, ViewEncapsulation, Input, ViewChild, Renderer} from '@angular/core';

import { NgSemanticModule } from "ng-semantic";

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})

export class TwitterComponent implements OnInit, AfterViewInit {

  public tweets: Object[] = [];
  public nameUser: string = '';
  public messageModal: string = '';

  @ViewChild('myModalNormal') myModalNormal;

  constructor(private renderer: Renderer) { }

  onTweet(tweet: HTMLInputElement) {
    this.tweets.push({ value: tweet.value, date: new Date()});
    tweet.value = null;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.renderer.invokeElementMethod(this.myModalNormal, 'show');
  }

  saveNameAndCloseModal(nameUser: string) {
    if (!nameUser) {
      this.messageModal = "Por favor, é necessário um nome de usuário. Pode ser qualquer coisa!";
    } else {
      this.nameUser = nameUser;
      this.renderer.invokeElementMethod(this.myModalNormal, 'hide');
    }
  }

}
