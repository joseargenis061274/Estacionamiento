import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiconclaveComponent } from './apiconclave.component';

describe('ApiconclaveComponent', () => {
  let component: ApiconclaveComponent;
  let fixture: ComponentFixture<ApiconclaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiconclaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiconclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
