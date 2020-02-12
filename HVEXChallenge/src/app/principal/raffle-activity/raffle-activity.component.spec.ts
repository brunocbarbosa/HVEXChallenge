import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaffleActivityComponent } from './raffle-activity.component';

describe('RaffleActivityComponent', () => {
  let component: RaffleActivityComponent;
  let fixture: ComponentFixture<RaffleActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaffleActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaffleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
