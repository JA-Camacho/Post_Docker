import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  readonly URL = 'http://localhost:8080/api/user';
  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
  }

  getUsers(){
    return this.http.get(this.URL);
  }

  postUsers(user: User){
    return this.http.post(this.URL, user);
  }

  putUser(user: User){
    return this.http.put(this.URL, user);
  }

  deleteUser(id: string){
    return this.http.delete(this.URL + '/' + id);
  }

}