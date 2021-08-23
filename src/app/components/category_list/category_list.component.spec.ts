import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Category_listComponent } from './category_list.component';

describe('Category_listComponent', () => {
  let component: Category_listComponent;
  let fixture: ComponentFixture<Category_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Category_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Category_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
