import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapaService } from '../../services/mapa.service';
import { Observable, map, startWith } from 'rxjs';
import { LugarMarcado } from '../../models/lugarMarcado';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css'],
})
export class BarraBusquedaComponent implements OnInit {
  
  buscarLugarControl = new FormControl('');
  lugaresMarcados: LugarMarcado[] = [];
  nombresLugaresMarcados: string[] = [];
  nombresFiltrados?: Observable<string[]>;

  constructor(private mapaService: MapaService) {}

  ngOnInit() {
    this.obtenerOpciones();

    this.nombresFiltrados = this.buscarLugarControl.valueChanges.pipe(
      startWith(''),
      map((nombreBuscado) => this._filtrarNombres(nombreBuscado || ''))
    );
  }

  obtenerOpciones() {
    this.lugaresMarcados = this.mapaService.lugaresMarcados;
    this.nombresLugaresMarcados = this.lugaresMarcados.map((opcion) => opcion.nombre);
  }

  private _filtrarNombres(nombreBuscado: string): string[] {
    nombreBuscado = nombreBuscado.toLowerCase();
    return this.nombresLugaresMarcados.filter((nombreLugarMarcado) =>
      nombreLugarMarcado.toLowerCase().includes(nombreBuscado)
    );
  }

  volar(nombreLugarMarcado: string) {
    this.mapaService.viajar(nombreLugarMarcado);
  }
}