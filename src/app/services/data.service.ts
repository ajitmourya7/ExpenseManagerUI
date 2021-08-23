import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentUser: User;
  private authToken: string;
  private loadingMessage: string;

  private modalSource = new BehaviorSubject<boolean>(false);
  showModal = this.modalSource.asObservable();
  private errorSource = new BehaviorSubject<any>('');
  error = this.errorSource.asObservable();
  private titleSource = new BehaviorSubject<string>('');
  title = this.titleSource.asObservable();


  constructor() {
    this.currentUser = null;
    this.authToken = null;
    this.loadingMessage = '';
  }

  getUser(): User {
    return this.currentUser;
  }

  setUser(user: User) {
    this.currentUser = user;
  }
  getToken(): string {
    return this.authToken;
  }

  setToken(token: string) {
    this.authToken = token;
  }

  showLoadingModal(msg?: string) {
    if (msg) {
      this.loadingMessage = msg;
    } else {
      this.loadingMessage = 'Updating';
    }
    this.modalSource.next(true);
  }

  hideLoadingModal() {
    this.modalSource.next(false);
  }
  getModalMessage() {
    return this.loadingMessage;
  }

  setToastr(toastrType: string, toastrMsg?: string) {
    if (toastrType === 'clear') {
      this.errorSource.next(null);
    } else {
      const temp = { type: toastrType, msg: toastrMsg};
      this.errorSource.next(temp);
    }
  }
  setTitle(title: string) {
    this.titleSource.next(title);
  }
}
