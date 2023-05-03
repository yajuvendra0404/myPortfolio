import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalProjectComponent } from './professional-project.component';

describe('ProfessionalProjectComponent', () => {
  let component: ProfessionalProjectComponent;
  let fixture: ComponentFixture<ProfessionalProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
