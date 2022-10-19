import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema03ReferenciasComponent } from './tema03-referencias.component';

describe('Tema03ReferenciasComponent', () => {
  let component: Tema03ReferenciasComponent;
  let fixture: ComponentFixture<Tema03ReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema03ReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema03ReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
