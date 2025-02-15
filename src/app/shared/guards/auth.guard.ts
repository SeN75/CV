import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
  // will be used when login is implemented
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.currentUser$.pipe(
    map((user) => {
      if (user) {
        return true;
      }
      return router.createUrlTree(['/r/login']);
    })
  );
};
