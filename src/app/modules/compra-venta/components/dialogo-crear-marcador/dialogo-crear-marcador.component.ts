import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogo-crear-marcador',
  templateUrl: './dialogo-crear-marcador.component.html',
  styleUrls: ['./dialogo-crear-marcador.component.css']
})
export class DialogoCrearMarcadorComponent implements OnInit {
  formularioLugarMarcado!: FormGroup;

  constructor(
    public formularioDialogo: MatDialogRef<DialogoCrearMarcadorComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formularioLugarMarcado = this.formBuilder.group({
      nombre: ['', Validators.required],
      latitud: [0, Validators.required],
      longitud: [0, Validators.required]
    });
  }
}
