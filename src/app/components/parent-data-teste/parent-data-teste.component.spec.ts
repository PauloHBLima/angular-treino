import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataTesteComponent } from './parent-data-teste.component';

describe('ParentDataTesteComponent', () => {
  let component: ParentDataTesteComponent;
  let fixture: ComponentFixture<ParentDataTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDataTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDataTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
