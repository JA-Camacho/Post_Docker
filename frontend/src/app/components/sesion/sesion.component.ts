import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  fechaActual: string;
  constructor(
    public userService: UserService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }
  nombre = '';
  apellido = '';
  user = '';
  password = '';

  registrar() {
    let user = new User(this.nombre, this.apellido, this.user, this.password, this.fechaActual);
    this.userService.postUsers(user).subscribe((res) => {
      localStorage.setItem('token', 'TokenEjemplo');
      this.router.navigate(['/new-post']);
    });

  }

  iniciarSesion() {
    this.userService.getUser(this.user, this.password).subscribe(
      (res) => {
        if (res) {
          let usuario = res as User[];
          usuario.forEach((values) => {
            localStorage.setItem('token', 'TokenEjemplo');
            localStorage.setItem('autor', values.apellido + " " + values.nombre);
            localStorage.setItem('ID', values.ID_usuario);
            this.router.navigate(['/new-post']);
          })
        }
      },
      (error) => {
        return alert("Usuario No registrado");
      }
    );
  }
}
