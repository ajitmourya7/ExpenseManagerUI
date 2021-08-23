import {Component, NgZone, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ToastrService} from 'ngx-toastr';
import { LoadingToastComponent } from '../loading-toast/loading-toast.component';
import {Subscription} from 'rxjs';
import * as jquery from 'jquery';
const $: JQueryStatic = jquery;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  modalRef: any;
  loadingMessage: string;
  first: boolean;
  title: string;
  userName = '';
  userType: string;
  activeClass: string;

  @ViewChild('loadingModal') loadingModal: TemplateRef<any>;
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private auth: AuthService, private ds: DataService, private modalService: BsModalService,
              private toastr: ToastrService, public zone: NgZone) {
    this.activeClass = '';
    this.loadingMessage = 'Updating';
    console.log(this.auth.user)
    this.userName = this.auth.user.username;
  }

  ngOnInit() {
    this.ds.setToastr('clear');
    this.userName = this.auth.user.username;
  }
  navigateTo(urlRoute: string) {
   this.router.navigate(['app/' + urlRoute]);
  }
  logout() {
    this.auth.logout();
    this.ds.setToken(null);
    this.ds.setUser(null);
    this.router.navigate(['login']);
  }
  add_category() {
    this.router.navigate(['add_category']);
  }
  category_list() {
    this.router.navigate(['category_list']);
  }
  expense_list() {
    this.router.navigate(['expense_list']);
  }
  add_expense() {
    this.router.navigate(['add_expense']);
  }
}
