import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSemanticModule } from "ng-semantic";
// import { routing } from './twitter.routes';
import { TwitterComponent } from './twitter.component';

@NgModule({
  imports: [
    CommonModule,
	NgSemanticModule
    // routing
  ],
  declarations: [
    TwitterComponent
  ],
  exports: [ TwitterComponent ]
})
export class TwitterModule { }
