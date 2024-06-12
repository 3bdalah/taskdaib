import { Component } from '@angular/core';

import { HeaderComponent } from './Common/header/header.component';
import { CommonModule } from '@angular/common';
import { MemberShipComponent } from './Components/member-ship/member-ship.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    HeaderComponent,
    MemberShipComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
