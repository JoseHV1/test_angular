import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { LayoutModule } from '@shared/layout/layout.module';
import { externalGuard } from '@shared/guard/external.guard';
import { internalGuard } from '@shared/guard/internal.guard';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./login/login.module').then(module => module.LoginModule),
          canActivate: [externalGuard]
      },
      {
        path: 'shopping',
        loadChildren: () =>
          import('./home/home.module').then(module => module.HomeModule),
          canActivate: [internalGuard]
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule, 
    LayoutModule,
    RouterModule.forChild(routes),
  ], 
})
export class PrincipalModule { }
