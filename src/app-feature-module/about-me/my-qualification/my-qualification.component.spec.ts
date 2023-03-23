import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQualificationComponent } from './my-qualification.component';

describe('MyQualificationComponent', () => {
  let component: MyQualificationComponent;
  let fixture: ComponentFixture<MyQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQualificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
