import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { ButtonModalModule } from '../button-modal/button-modal.module';
import { ModalDetailsModule } from '../modal-details/modal-details.module';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ButtonModalModule,
    ModalDetailsModule,
  ], 
  exports: [TableComponent]
})
export class TableModule { }
