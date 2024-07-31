import { Injectable } from '@angular/core';
import { SigninInterface } from '@shared/interfaces/singin_interface';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { LocalStorageService } from './localstorage.service';
import { AuthInterface } from '@shared/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private authSubject: BehaviorSubject<AuthInterface | null>;
  public readonly auth$: Observable<AuthInterface | null>;

  constructor(private _storage: LocalStorageService) { 
    const auth = this._storage.getItem('Auth');
    this.authSubject = new BehaviorSubject<AuthInterface | null>(auth ? (auth as AuthInterface) : null);
    this.auth$ = this.authSubject.asObservable();
  }

  singIn(req: SigninInterface): Observable<boolean>{
    if(req.email === 'user@demo.com' && req.password === "123456") {
      // TO DO se crea un valor faker simuluando la respuesta de un backend
      // TO DO esta respuesta facker tambien tiene una interfaz creada
      const resp: AuthInterface = {
        user: 'Test Angular',
        token: 'J029JASKWQIUW1823JASH12JKAS0',
        tokenType: 'Bearer',
      }

      this._storage.setItem('Auth', resp);
      this.authSubject.next(resp);    
      return of(true);
    }
    return of(false);
  }

  logout(): Observable<boolean>{
    return of(true).pipe(
      tap(() => {
        this._storage.deleteItem('Auth');
        this.authSubject.next(null);
      })
    );
  }
}
