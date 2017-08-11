import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoxBootstrapComponent } from './modal-box-bootstrap.component';

describe('ModalBoxBootstrapComponent', () => {
  let component: ModalBoxBootstrapComponent;
  let fixture: ComponentFixture<ModalBoxBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoxBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoxBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
