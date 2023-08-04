import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private authservice: AuthService){

  }

  isLoggedIn() {
    return this.authservice.loggedIn();
  }

  logout(){
    localStorage.removeItem('token');
  }
}
