import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CompraVentaRoutingModule } from './compra-venta-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { MapComponent } from './components/map/map.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BotonReubicarComponent } from './components/boton-reubicar/boton-reubicar.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BotonCrearMarcadorComponent } from './components/boton-crear-marcador/boton-crear-marcador.component';
import { DialogoCrearMarcadorComponent } from './components/dialogo-crear-marcador/dialogo-crear-marcador.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProyectosComponent,
    EstadisticasComponent,
    MapComponent,
    LoadingComponent,
    BotonReubicarComponent,
    BarraBusquedaComponent,
    BotonCrearMarcadorComponent,
    DialogoCrearMarcadorComponent
  ],
  imports: [
    CommonModule,
    CompraVentaRoutingModule,
    MaterialModule,
    LeafletModule,
    ReactiveFormsModule
  ]
})
export class CompraVentaModule { }
