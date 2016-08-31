import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { routing } from './twitter.routes';
import { TwitterComponent } from './twitter.component';

@NgModule({
  imports: [
    CommonModule,
    // routing
  ],
  declarations: [
    TwitterComponent
  ],
  exports: [ TwitterComponent ]
})
export class TwitterModule { }
