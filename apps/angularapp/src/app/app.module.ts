import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedBuildableLibModule } from '@prototype-nx-bazel/shared-buildable-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedBuildableLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
