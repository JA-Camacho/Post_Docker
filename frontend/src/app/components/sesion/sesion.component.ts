import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  fechaActual : string;
  constructor(
    public userService: UserService,
    private datePipe: DatePipe
  ){
    this.fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }
  nombre = '';
  apellido = '';
  user = '';
  password = '';
  
  registrar() {
    let user = new User(this.nombre, this.apellido, this.user, this.password, this.fechaActual);
    this.userService.postUsers(user).subscribe((res)=>{
      console.log(res);
    });
  }
}
