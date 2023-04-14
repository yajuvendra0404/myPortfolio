import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineSvgComponent } from './underline-svg.component';

describe('UnderlineSvgComponent', () => {
  let component: UnderlineSvgComponent;
  let fixture: ComponentFixture<UnderlineSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderlineSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderlineSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
