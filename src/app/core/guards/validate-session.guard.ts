import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const validateSessionGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('authToken');
  const router = inject(Router);

  const isValidToken = (token: string | null): boolean => {
    return token !== null && token !== '';
  };

  if (isValidToken(token)) {
    console.log('Token: ' + token);
    return true; //TODO Permite la navegación
  } else {
    console.log('Token: ' + token);
    router.navigate(['/', 'auth', 'login']);
    return false; //TODO Bloquea la navegación
  }
};
