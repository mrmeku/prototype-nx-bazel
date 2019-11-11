import { Component } from '@angular/core';
import { SHARED_SYMBOL } from '@prototype-nx-bazel/shared-lib';
@Component({
  selector: 'prototype-nx-bazel-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularapp' + SHARED_SYMBOL;
}
