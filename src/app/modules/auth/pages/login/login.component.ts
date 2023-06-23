import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario = {
    correo: '',
    clave: '',
  };
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ingresar() {
    this.authService.ingresarUsuario(this.usuario).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/compra-venta/home']).then(() => {
          // Recargar la página de destino
          window.location.reload();
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
