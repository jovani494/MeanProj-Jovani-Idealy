import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecreateComponent } from './servicecreate.component';

describe('ServicecreateComponent', () => {
  let component: ServicecreateComponent;
  let fixture: ComponentFixture<ServicecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
