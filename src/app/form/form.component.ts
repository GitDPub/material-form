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
  }

}
