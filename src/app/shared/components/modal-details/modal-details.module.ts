import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDetailsComponent } from './modal-details.component';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ModalDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ], 
  exports: [ModalDetailsComponent]
})
export class ModalDetailsModule { }
