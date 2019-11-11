import { Component } from '@angular/core';
import { SHARED_SYMBOL } from '@prototype-nx-bazel/shared-lib';
@Component({
  selector: 'prototype-nx-bazel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp' + SHARED_SYMBOL;
}
