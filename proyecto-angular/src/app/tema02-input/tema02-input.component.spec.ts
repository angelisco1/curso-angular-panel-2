import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema02InputComponent } from './tema02-input.component';

describe('Tema02InputComponent', () => {
  let component: Tema02InputComponent;
  let fixture: ComponentFixture<Tema02InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema02InputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema02InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
