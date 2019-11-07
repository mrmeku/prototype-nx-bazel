import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicklesModule } from '@prototype-nx-bazel/parent/some-cool-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PicklesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
