import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTdComponent } from './form-td.component';

describe('FormTdComponent', () => {
  let component: FormTdComponent;
  let fixture: ComponentFixture<FormTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
