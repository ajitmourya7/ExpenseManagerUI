import {NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {MainComponent} from './components/main/main.component';

import { Add_categoryComponent } from './components/add_category/add_category.component';
import {SignupComponent} from './components/signup/signup.component';
import {Category_listComponent} from "./components/category_list/category_list.component";
import {Expense_listComponent} from "./components/expense_list/expense_list.component";
import {Add_expenseComponent} from "./components/add_expense/add_expense.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'add_category',
        component: Add_categoryComponent,
      },
      { path: 'category_list',
        component: Category_listComponent,
      },
      { path: 'add_expense',
        component: Add_expenseComponent,
      },
      { path: 'expense_list',
        component: Expense_listComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
