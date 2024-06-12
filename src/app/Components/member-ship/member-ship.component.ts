import { Component, OnInit } from '@angular/core';
import { CardMemberShipComponent } from '../card-member-ship/card-member-ship.component';
import { HttpClient } from '@angular/common/http';
import { Membership } from '../../Interface/membership';
import { HeaderComponent } from '../../Common/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-member-ship',
  standalone: true,
  imports: [CommonModule,CardMemberShipComponent,HeaderComponent],
  templateUrl: './member-ship.component.html',
  styleUrl: './member-ship.component.css'
})
export class MemberShipComponent  implements OnInit{
   URLApi:string = "https://abudiyab-soft.com/api/memberships";
  AllDataMembers:Membership[] = []; 
  constructor(private _http : HttpClient){}

  ngOnInit(): void {
    this._http.get<Membership[]>(this.URLApi).subscribe(( members:any) => {
      this.AllDataMembers = members.data;
      
      console.log("data updated all member ship ", this.AllDataMembers)
    });
  }


}
