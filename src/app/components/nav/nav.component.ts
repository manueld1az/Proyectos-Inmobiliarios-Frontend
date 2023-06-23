import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  sesionIniciada: boolean = false;

  constructor(
    private authService: AuthService,
    private detectorCambios: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sesionIniciada = this.authService.comprobacionRegistro();
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    // Se cambia el estado de la sesión para que el detector de cambios renderize de nuevo el componente Nav
    this.sesionIniciada = false;
    this.detectorCambios.detectChanges();
  }
}
