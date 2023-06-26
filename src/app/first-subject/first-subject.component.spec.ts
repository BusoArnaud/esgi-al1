import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubjectComponent } from './first-subject.component';

describe('FirstSubjectComponent', () => {
  let component: FirstSubjectComponent;
  let fixture: ComponentFixture<FirstSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
