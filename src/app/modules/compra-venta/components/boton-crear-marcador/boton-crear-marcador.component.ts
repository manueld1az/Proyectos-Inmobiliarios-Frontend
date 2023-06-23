import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoCrearMarcadorComponent } from '../dialogo-crear-marcador/dialogo-crear-marcador.component';
import { MapaService } from '../../services/mapa.service';
import { LugarMarcado } from '../../models/lugarMarcado';

@Component({
  selector: 'app-boton-crear-marcador',
  templateUrl: './boton-crear-marcador.component.html',
  styleUrls: ['./boton-crear-marcador.component.css'],
})
export class BotonCrearMarcadorComponent {

  // Datos iniciales del formulario para crear un nuevo marcador
  latitud: number = 0;
  longitud: number = 0;
  datosLugarMarcado: LugarMarcado = {
    nombre: '',
    coordenadas: [this.latitud, this.longitud],
  };

  constructor(public dialog: MatDialog, private mapaService: MapaService) {}

  mostrarDialogo(): void {
    // Se rellena el formulario con los datos iniciales
    const formularioDialogo = this.dialog.open(DialogoCrearMarcadorComponent, {
      data: this.datosLugarMarcado,
    });

    // Se subscribe al evento de cierre del dialogo para obtener los datos del formulario y enviarlos
    formularioDialogo.afterClosed().subscribe((data: any) => {
      const nuevoLugarMarcado: LugarMarcado = {
        nombre: data.nombre,
        coordenadas: [data.latitud, data.longitud]
      }
      if (data) {
        this.mapaService.guardarLugaresMarcados(nuevoLugarMarcado);
      }
    });
  }
}
