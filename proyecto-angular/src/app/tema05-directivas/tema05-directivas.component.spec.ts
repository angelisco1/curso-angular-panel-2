import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema05DirectivasComponent } from './tema05-directivas.component';

describe('Tema05DirectivasComponent', () => {
  let component: Tema05DirectivasComponent;
  let fixture: ComponentFixture<Tema05DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tema05DirectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tema05DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
