import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFavoritosComponent } from './tela-favoritos.component';

describe('TelaFavoritosComponent', () => {
  let component: TelaFavoritosComponent;
  let fixture: ComponentFixture<TelaFavoritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaFavoritosComponent]
    });
    fixture = TestBed.createComponent(TelaFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
