import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario = {
    correo: '',
    clave: '',
  };
  usuarioRegistrado: boolean = true;
  comprobacion = { mensaje: '' };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.usuarioRegistrado = this.authService.comprobacionRegistro();
    if (this.usuarioRegistrado) {
      this.comprobacion = { mensaje: '¡Ya esta registrado!' };
    } else {
      this.comprobacion = { mensaje: '¡Debe registrarse!' };
    }
  }

  registrar() {
    this.authService.crearUsuario(this.usuario).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/auth/ingreso']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
