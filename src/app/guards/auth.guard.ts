import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // comprobación de registro
    if (!this.authService.comprobacionRegistro()) {
      console.log('Debe registrarse');
      this.router.navigate(['/auth/registro']);
      return false;
    }
    this.authService.comprobacionRegistro();
    return true;
  }
}
