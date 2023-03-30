import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySocialMediaPlatformComponent } from './my-social-media-platform.component';

describe('MySocialMediaPlatformComponent', () => {
  let component: MySocialMediaPlatformComponent;
  let fixture: ComponentFixture<MySocialMediaPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySocialMediaPlatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySocialMediaPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
