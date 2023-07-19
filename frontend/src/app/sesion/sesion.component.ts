import { Component } from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  nombre: string = '';
  apellido: string = '';
  user: string = '';
  correo: string = '';
  password: string = '';

  async envio(datos: any) {
    const respuestaRaw = await fetch("172.18.0.2:8080", {
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const jsonDecodificado = await respuestaRaw.json();
    console.log(jsonDecodificado);
  }
  
  registrar() {
    let datos = {
      nombre: this.nombre,
      apellido: this.apellido,
      user: this.user,
      correo: this.correo,
      password: this.password
    };
    this.envio(datos);
  }
}
