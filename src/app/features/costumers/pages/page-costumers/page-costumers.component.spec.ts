import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCostumersComponent } from './page-costumers.component';

describe('PageCostumersComponent', () => {
  let component: PageCostumersComponent;
  let fixture: ComponentFixture<PageCostumersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCostumersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCostumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
