import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumersCardComponent } from './costumers-card.component';

describe('CostumersCardComponent', () => {
  let component: CostumersCardComponent;
  let fixture: ComponentFixture<CostumersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumersCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
