import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CompraVentaRoutingModule } from './compra-venta-routing.module';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    ProyectosComponent,
    EstadisticasComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CompraVentaRoutingModule,
    MaterialModule
  ]
})
export class CompraVentaModule { }
