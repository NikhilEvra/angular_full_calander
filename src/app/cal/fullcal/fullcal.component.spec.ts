import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalComponent } from './fullcal.component';

describe('FullcalComponent', () => {
  let component: FullcalComponent;
  let fixture: ComponentFixture<FullcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
