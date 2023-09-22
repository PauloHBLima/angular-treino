import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderifTesteComponent } from './renderif-teste.component';

describe('RenderifTesteComponent', () => {
  let component: RenderifTesteComponent;
  let fixture: ComponentFixture<RenderifTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderifTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderifTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
