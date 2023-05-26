import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  APIs de los componentes utilizados de Angular Material Design
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // Exporta los componentes de Material para el modulo principal o hacia otros módulos externos
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatInputModule
  ]
})
export class MaterialModule { }
