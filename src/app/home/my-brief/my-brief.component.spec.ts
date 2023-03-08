import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBriefComponent } from './my-brief.component';

describe('MyBriefComponent', () => {
  let component: MyBriefComponent;
  let fixture: ComponentFixture<MyBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBriefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
