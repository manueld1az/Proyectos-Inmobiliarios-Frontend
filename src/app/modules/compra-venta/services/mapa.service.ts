import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { LugarMarcado } from '../models/lugarMarcado';

@Injectable({
  providedIn: 'root',
})
export class MapaService {
  private mapa!: L.Map;

  // Array en  el cual se simulara la base de datos
  lugaresMarcados: LugarMarcado[] = [
    // Lugares Marcados de ejemplo
    // Coordenadas de Cali
    {
      nombre: 'Cali',
      coordenadas: [3.45, -76.53333],
    },
    {
      nombre: 'Lago Calima',
      coordenadas: [3.8945688, -76.5051828],
    },
  ];

  get mapaListo() {
    // Comprobacion booleana
    return !!this.mapa;
  }

  setMapa(mapa: L.Map) {
    this.mapa = mapa;
  }

  reubicar(coordenadas: [number, number]) {
    if (!this.mapaListo) throw Error('El mapa no se ha creado');
    // preguntar al chat sobre la funcion search de mapbox en leaflet
    this.mapa?.flyTo(coordenadas, 10);
    const nuevoMarcador = L.marker(coordenadas).addTo(this.mapa);
    const nuevoPopup = L.popup().setContent(
      this.lugaresMarcados[this.lugaresMarcados.length - 1].nombre
    );
    nuevoMarcador.bindPopup(nuevoPopup).openPopup();
    setTimeout(() => {
      nuevoMarcador.closePopup();
    }, 13000);
  }


  guardarLugaresMarcados(lugarMarcado: LugarMarcado){
    // Se guarda el nuevo lugar marcado en el array que simula la base de datos
    this.lugaresMarcados.push(lugarMarcado);
    // Se crea el marcador del nuevo lugar
    this.crearMarcador(lugarMarcado);
    // Se ubica el mapa en el nuevo lugar marcado
    this.viajar(lugarMarcado.nombre);
  }

  crearMarcador(lugarMarcado: LugarMarcado) {
    const nuevoMarcador = L.marker(lugarMarcado.coordenadas as L.LatLngExpression).addTo(this.mapa);
    const nuevoPopup = L.popup().setContent(lugarMarcado.nombre);
    nuevoMarcador.bindPopup(nuevoPopup).openPopup();
    setTimeout(() => {
      nuevoMarcador.closePopup();
    }, 13000);
  }

  viajar(nombreBuscado: string) {
    const lugarBuscado = this.lugaresMarcados.find((lugar) => {
      return lugar ? lugar.nombre === nombreBuscado : null;
    });
    this.mapa?.flyTo(lugarBuscado!.coordenadas as L.LatLngExpression, 10);
  }
}
