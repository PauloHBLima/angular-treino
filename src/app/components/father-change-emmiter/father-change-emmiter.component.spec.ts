import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherChangeEmmiterComponent } from './father-change-emmiter.component';

describe('FatherChangeEmmiterComponent', () => {
  let component: FatherChangeEmmiterComponent;
  let fixture: ComponentFixture<FatherChangeEmmiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherChangeEmmiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherChangeEmmiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
