import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pg-home',
  templateUrl: './pg-home.component.html',
  styleUrls: ['./pg-home.component.css'],
})
export class PgHomeComponent implements OnInit {
  constructor(private ruta: Router) {}

  ngOnInit(): void {}

  Play = () => {
    Swal.fire({
      title: 'Bienvenido a la Tierra (C-137)',
      text: 'Para continuar, ingresa tu nombre ',
      input: 'text',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        if (login == '') {
          Swal.showValidationMessage(`Ingresa tu nombre`);
        } else {
          this.ruta.navigate(['/memorycard']);
        }
      },
    });
  };
}
