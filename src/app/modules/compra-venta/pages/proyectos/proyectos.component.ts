import { Component } from '@angular/core';
import { LugaresService } from '../../services/lugares.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  constructor(private lugaresService: LugaresService) {}

  get coordenadasUsuario() {
    return this.lugaresService.coordenadasListas;
  }
}
