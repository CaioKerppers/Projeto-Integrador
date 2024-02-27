// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './model/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (route.routeConfig?.path === 'registro') {
      return true; // Permite acesso à rota de registro
    }

    const usuarioAutenticado = this.authService.getUserLogged();
  
    if (usuarioAutenticado) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
