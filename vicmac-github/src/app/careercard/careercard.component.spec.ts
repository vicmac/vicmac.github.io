import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareercardComponent } from './careercard.component';

describe('CareercardComponent', () => {
  let component: CareercardComponent;
  let fixture: ComponentFixture<CareercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
