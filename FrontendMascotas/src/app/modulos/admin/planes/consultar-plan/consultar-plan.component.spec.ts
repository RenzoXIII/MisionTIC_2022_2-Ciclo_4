import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPlanComponent } from './consultar-plan.component';

describe('ConsultarPlanComponent', () => {
  let component: ConsultarPlanComponent;
  let fixture: ComponentFixture<ConsultarPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
