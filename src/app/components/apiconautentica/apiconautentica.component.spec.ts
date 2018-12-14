import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiconautenticaComponent } from './apiconautentica.component';

describe('ApiconautenticaComponent', () => {
  let component: ApiconautenticaComponent;
  let fixture: ComponentFixture<ApiconautenticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiconautenticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiconautenticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
