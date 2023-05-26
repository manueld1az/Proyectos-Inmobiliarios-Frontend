import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRutasModule } from './auth-rutas.module';

import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRutasModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
