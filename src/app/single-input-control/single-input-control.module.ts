import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputControlComponent } from './input-control/input-control.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputControlComponent],
  exports: [InputControlComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SingleInputControlModule {}
