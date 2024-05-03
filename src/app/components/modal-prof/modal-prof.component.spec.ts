import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProfComponent } from './modal-prof.component';

describe('ModalProfComponent', () => {
  let component: ModalProfComponent;
  let fixture: ComponentFixture<ModalProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalProfComponent]
    });
    fixture = TestBed.createComponent(ModalProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
