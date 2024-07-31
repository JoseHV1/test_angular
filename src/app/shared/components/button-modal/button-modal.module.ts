import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModalComponent } from './button-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ButtonModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ], exports: [ButtonModalComponent]
})
export class ButtonModalModule { }
