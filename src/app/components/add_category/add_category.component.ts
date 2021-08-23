import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './add_category.component.html',
  styleUrls: ['./add_category.component.scss']
})
// tslint:disable-next-line:class-name
export class Add_categoryComponent implements OnInit {

  formGroup: FormGroup;
  err = false;
  succ = false;
  errMessage = '';

  constructor(private router: Router, private api: ApiService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  submit() {
    const formData = new FormData();
    // @ts-ignore
    formData.set('name', this.formGroup.get('name').value);
    console.log(formData);
    this.api.create_category(formData).subscribe((data: { error, data: []}) => {
      console.log(data);
      if (data.error.length === 0) {
        console.log(data.data);
        this.succ = true;
        this.errMessage = 'Added';
      } else {
        this.err = true;
        this.errMessage = data.error;
      }
    }, (err: string) => {
      console.log(err);
      this.err = true;
      this.errMessage = err;
    });
  }

}
