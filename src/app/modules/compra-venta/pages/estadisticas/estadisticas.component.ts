import { Component } from '@angular/core';
import { estadisticaMensual } from '../../models/estadisticaMensual';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {

  datosTabla: estadisticaMensual[] = [
    { 
      mes: 'ENERO',
      cantidadInmuebles: 20,
      totalVentas: 40_000_000},
    { 
      mes: 'FEBRERO',
      cantidadInmuebles: 30,
      totalVentas: 80_000_000},
    { 
      mes: 'MARZO',
      cantidadInmuebles: 30,
      totalVentas: 90_000_000},
    { 
      mes: 'ABRIL',
      cantidadInmuebles: 50,
      totalVentas: 110_000_000},
  ];

  columnastabla: string[] = ['mes', 'cantidadInmuebles', 'totalVentas'];
  dataSource = this.datosTabla;

}
