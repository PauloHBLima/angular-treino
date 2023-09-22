import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChangeEmmiterComponent } from './second-change-emmiter.component';

describe('SecondChangeEmmiterComponent', () => {
  let component: SecondChangeEmmiterComponent;
  let fixture: ComponentFixture<SecondChangeEmmiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondChangeEmmiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChangeEmmiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
