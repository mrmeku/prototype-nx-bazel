import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicklesComponent } from './pickles.component';

@NgModule({
  declarations: [PicklesComponent],
  imports: [CommonModule],
  exports: [PicklesComponent]
})
export class PicklesModule {}
