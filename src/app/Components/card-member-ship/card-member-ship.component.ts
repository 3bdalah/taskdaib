import { Component,Input } from '@angular/core';
import { Membership } from '../../Interface/membership';

@Component({
  selector: 'app-card-member-ship',
  standalone: true,
  imports: [],
  templateUrl: './card-member-ship.component.html',
  styleUrl: './card-member-ship.component.css'
})
export class CardMemberShipComponent {
 @Input()  dataMemberShip!: Membership;
}
