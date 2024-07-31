import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { ProductsInterface } from '@shared/interfaces/products.interface';

@Component({
  selector: 'app-button-modal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.scss']
})
export class ButtonModalComponent {
  @Input() data!: ProductsInterface;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ModalDetailsComponent, {
      width: '550px',
      data: this.data,
    });
  }
}
