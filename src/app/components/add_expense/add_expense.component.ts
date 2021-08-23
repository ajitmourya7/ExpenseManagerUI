import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './add_expense.component.html',
  styleUrls: ['./add_expense.component.scss']
})
// tslint:disable-next-line:class-name
export class Add_expenseComponent implements OnInit {

  formGroup: FormGroup;
  err = false;
  succ = false;
  errMessage = '';
  // tslint:disable-next-line:variable-name
  category_list: any;

  constructor(private router: Router, private api: ApiService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      amount: ['', Validators.required],
      expense_type: ['', Validators.required],
      descriptions: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.api.view_category().subscribe((data: { error, data: any}) => {
      console.log(data);
      if (data.error.length === 0) {
        console.log(data.data);
        this.category_list = data.data.category_list;
        console.log(this.category_list);
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
  submit() {
    const formData = new FormData();
    // @ts-ignore
    formData.set('amount', this.formGroup.get('amount').value);
    formData.set('expense_type', this.formGroup.get('expense_type').value);
    formData.set('descriptions', this.formGroup.get('descriptions').value);
    formData.set('category_id', this.formGroup.get('category').value);
    this.api.create_expense(formData).subscribe((data: { error, data: any}) => {
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
      this.errMessage = "Error";
    });
  }

}
