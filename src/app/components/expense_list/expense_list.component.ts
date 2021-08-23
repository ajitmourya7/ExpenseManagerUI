import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './expense_list.component.html',
  styleUrls: ['./expense_list.component.scss']
})
// tslint:disable-next-line:class-name
export class Expense_listComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  expense_list = [];
  show = false;
  constructor(private router: Router, private api: ApiService, private fb: FormBuilder) {
    this.show = false;
  }

  ngOnInit() {
    this.api.view_expense().subscribe((data: { error, data: any}) => {
      console.log(data);
      if (data.error.length === 0) {
        console.log(data.data);
        this.expense_list = data.data.expense_list;
        this.show = true;
      } else {
      }
    }, (err: string) => {
      console.log(err);
    });
  }

}
