import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteEventsComponent } from './teste-events.component';

describe('TesteEventsComponent', () => {
  let component: TesteEventsComponent;
  let fixture: ComponentFixture<TesteEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
