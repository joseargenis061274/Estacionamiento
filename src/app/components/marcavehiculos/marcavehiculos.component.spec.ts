import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcavehiculosComponent } from './marcavehiculos.component';

describe('MarcavehiculosComponent', () => {
  let component: MarcavehiculosComponent;
  let fixture: ComponentFixture<MarcavehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcavehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcavehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
