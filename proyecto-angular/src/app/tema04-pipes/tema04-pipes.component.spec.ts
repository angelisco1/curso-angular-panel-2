import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema04PipesComponent } from './tema04-pipes.component';

describe('Tema04PipesComponent', () => {
  let component: Tema04PipesComponent;
  let fixture: ComponentFixture<Tema04PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema04PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema04PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
