import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private _auth: AuthService, private router: Router){}

  logout(): void{
    this._auth.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
