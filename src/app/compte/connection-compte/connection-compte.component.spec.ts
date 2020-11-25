import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionCompteComponent } from './connection-compte.component';

describe('ConnectionCompteComponent', () => {
  let component: ConnectionCompteComponent;
  let fixture: ComponentFixture<ConnectionCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
