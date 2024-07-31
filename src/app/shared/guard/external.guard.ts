import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';
import { map, tap } from 'rxjs';

export const externalGuard: CanActivateFn = () => {
  const _auth = inject(AuthService);
  const router = inject(Router);

  return _auth.auth$.pipe(
    map(auth => auth === null),
    tap(resp => {
      if(!resp){
        router.navigate(['shopping']);
      }
    })
  );
};
