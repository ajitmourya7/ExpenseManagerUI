import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Expense_listComponent } from './expense_list.component';

describe('Category_listComponent', () => {
  let component: Expense_listComponent;
  let fixture: ComponentFixture<Expense_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Expense_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Expense_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
