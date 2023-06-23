import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LugaresService {

  // Se declara la variable que almacenara coordenadas que podrá tener un valor indefinido al principio
  coordenadas: [number, number] | undefined;

  get coordenadasListas(): boolean {
    // Comprobación booleana
    return !!this.coordenadas;
  }

  constructor() {
    this.obtenerCoordenadasUsuario();
  }

  async obtenerCoordenadasUsuario(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.coordenadas = [coords.latitude, coords.longitude];
        resolve(this.coordenadas);
      });
      (error: any) => {
        alert('No se pudo obtener la Geolocalizacion');
        console.log(error);
        reject();
      };
    });
  }
}