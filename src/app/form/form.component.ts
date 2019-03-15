import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  maxDate;
  fecha: any;
  correo: string;
  pass: string;

  constructor() { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.correo = 'abc@gmail.com';
  }

  onSubmit(formulario: NgForm) {
    console.log('correo: ', this.correo);
    console.log('contraseña: ', this.pass);
    console.log('fecha: ', this.fecha);

    //contenido de formulario: formlarioEjemplo
    console.log('Todos los datos del formulario: ', formulario);
    console.log('Datos del formulario: ', JSON.stringify(formulario.value, null, 2));
    console.log('correo: email del formulario: ', formulario.value.email);
    console.log('contraseña: password del formulario: ', formulario.value.password);
    console.log('fecha: date del formulario: ', formulario.value.date);
  }

}
