import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs';

export const publicGuard: CanActivateFn = (childRoute, state) => {
  const _auth = inject(AuthService);
  const router = inject(Router);

  return _auth.authState$.pipe(
    map((state) => {
      if (state) {
        router.navigate([''])
        return false;
      }else{
        return true;
      }
    })
  )
};

export const privateGuard: CanActivateFn = (childRoute, state) => {
  const _auth = inject(AuthService);
  const router = inject(Router);

  return _auth.authState$.pipe(
    map((state) => {
      if (!state) {
        router.navigateByUrl('/auth/login')
        return false;
      }else{
        return true;
      }
    })
  )
};
