import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

const apiUrl = 'http://localhost:8000/';

const httpUploadOptions = {
  headers: new HttpHeaders().set('Content-Type', 'multipart/form-data')
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) {
  }

  create_category(input: any) {
    console.log(input);
    const h = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.user.token);
    // this.createAuthorizationHeader(headers);
    return this.http.post<any>(apiUrl + 'api/create_category', input, {headers: h});
  }

  view_category() {
    const h = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.user.token);
    return this.http.get<any>(apiUrl + 'api/category_list', {headers: h});
  }

  view_expense() {
    const h = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.user.token);
    return this.http.post<any>(apiUrl + 'api/view_expense', {}, {headers: h});
  }

  create_expense(input: any) {
    console.log(input);
    const h = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth.user.token);
    // this.createAuthorizationHeader(headers);
    return this.http.post<any>(apiUrl + 'api/add_expense', input, {headers: h});
  }
}
