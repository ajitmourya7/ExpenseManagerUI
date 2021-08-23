import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add_expenseComponent } from './add_expense.component';

describe('Add_categoryComponent', () => {
  let component: Add_expenseComponent;
  let fixture: ComponentFixture<Add_expenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_expenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_expenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
