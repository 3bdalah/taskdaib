import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMemberShipComponent } from './card-member-ship.component';

describe('CardMemberShipComponent', () => {
  let component: CardMemberShipComponent;
  let fixture: ComponentFixture<CardMemberShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMemberShipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMemberShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
