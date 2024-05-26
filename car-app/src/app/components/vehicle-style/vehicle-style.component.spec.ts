import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStyleComponent } from './vehicle-style.component';

describe('VehicleStyleComponent', () => {
  let component: VehicleStyleComponent;
  let fixture: ComponentFixture<VehicleStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
