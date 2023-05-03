import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertAndAchieveComponent } from './cert-and-achieve.component';

describe('CertAndAchieveComponent', () => {
  let component: CertAndAchieveComponent;
  let fixture: ComponentFixture<CertAndAchieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertAndAchieveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertAndAchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
