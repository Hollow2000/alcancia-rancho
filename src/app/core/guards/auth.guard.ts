import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs';
import { enviroment } from '../../env/enviroment';

export const publicGuard: CanActivateFn = (childRoute, state) => {
  const _auth = inject(AuthService);
  const router = inject(Router);

  if (enviroment.mockUp) {
    if (_auth.mockIsLogged) {
      router.navigate([''])
      return false;
    } else {
      return true;
    }
  }
  
  return _auth.authState$.pipe(
    map(user => {
      if (user) {
        router.navigate([''])
        return false;
      } else {
        return true;
      }
    })
  )
};

export const privateGuard: CanActivateFn = (childRoute, state) => {
  const _auth = inject(AuthService);
  const router = inject(Router);

  if (enviroment.mockUp) {
    if (!_auth.mockIsLogged) {
      router.navigate(['/auth/login'])
      return false;
    } else {
      return true;
    }
  }

  return _auth.authState$.pipe(
    map(user => {
      if (!user) {
        router.navigateByUrl('/auth/login')
        return false;
      } else {
        return true;
      }
    })
  )

};
