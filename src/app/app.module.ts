import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';

const config = {
  clientId: '<PUT_CLIENT_ID_HERE>',
  issuer: 'https://srivittal.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
};

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent],
  imports: [BrowserModule, AppRoutingModule, OktaAuthModule],
  providers: [{ provide: OKTA_CONFIG, useValue: config }],
  bootstrap: [AppComponent],
})
export class AppModule {}
