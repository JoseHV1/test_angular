import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NavbarModule } from '../../shared/components/navbar/navbar.module';
import { TableModule } from '@shared/components/table/table.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule,
    TableModule,
    FormsModule,
  ], 
  exports: [HomeComponent]
})
export class HomeModule { }
