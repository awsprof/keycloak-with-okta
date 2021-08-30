import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  userName: string;

  constructor(public oktaAuth: OktaAuthService) {

  }

  async ngOnInit() {
    // returns an object with user's claims
    const userClaims = await this.oktaAuth.getUser();

    // user name is exposed directly as property
    this.userName = userClaims.name;

  }

}
