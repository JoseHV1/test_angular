import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hasError } from '@shared/helper/has-error.helper';
import { SigninInterface } from '@shared/interfaces/singin_interface';
import { AuthService } from '@shared/services/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  invalidUser: boolean = false;
  hasError = hasError;

  constructor(private router: Router, private _auth: AuthService){
    this.form = new FormGroup({
      email: new FormControl('',
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  sendForm(): void{
    if (this.form.invalid) {
      return;
    }

    const req = this.form.value as SigninInterface;

    this._auth
      .singIn(req)
      .subscribe(resp => {
        if(resp){
          this.form.reset();
          this.router.navigate(['shopping']);
        }else{
          this.invalidUser = true;
        }
      });
  }
}
