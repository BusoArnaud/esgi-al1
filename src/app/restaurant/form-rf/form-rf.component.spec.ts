import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRfComponent } from './form-rf.component';

describe('FormRfComponent', () => {
  let component: FormRfComponent;
  let fixture: ComponentFixture<FormRfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
