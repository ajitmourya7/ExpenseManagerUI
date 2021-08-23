import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

const apiUrl = 'http://localhost:8000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = {};

  constructor(private http: HttpClient) {
  }

  authenticate(input: any) {
    console.log(input);
    return this.http.post<any>(apiUrl + 'api/login', input);
  }

  create_user(input: any) {
    console.log(input);
    return this.http.post<any>(apiUrl + 'api/registration', input);
  }

  isLoggedIn() {
    const user = localStorage.getItem('userDetails');

    return !!user;

  }
  getLocalUser(): any {
    const user = localStorage.getItem('userDetails');
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }
  setLocalUser(user: any) {
    console.log(user);
    this.user.username = user.username;
    this.user.token = user.token;
    localStorage.setItem('userDetails', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('userDetails');
  }
}
