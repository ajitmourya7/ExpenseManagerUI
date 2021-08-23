import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  err = false;
  errMessage = '';

  constructor(private router: Router, private auth: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  login() {
    const formData = new FormData();
    // @ts-ignore
    formData.set('username', this.loginForm.get('username').value);
    // @ts-ignore
    formData.set('password', this.loginForm.get('password').value);
    this.auth.authenticate(formData).subscribe((data: { error: [], data: []}) => {
      console.log(data);
      if (data.error.length === 0) {
        console.log(data.data);
        this.auth.setLocalUser(data.data);
        this.router.navigate(['']);
      } else {
        this.err = true;
        this.errMessage = 'Incorrect username or password';
      }
    }, (err: string) => {
      console.log(err);
      this.err = true;
      this.errMessage = err;
    });
  }

}
