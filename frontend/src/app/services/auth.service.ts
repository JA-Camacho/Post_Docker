import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');    
  }
}
