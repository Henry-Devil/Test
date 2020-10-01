import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsPageComponent } from './abouts-page.component';

describe('AboutsPageComponent', () => {
  let component: AboutsPageComponent;
  let fixture: ComponentFixture<AboutsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
