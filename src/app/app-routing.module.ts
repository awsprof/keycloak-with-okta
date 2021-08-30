import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

import { OktaAuthGuard } from '@okta/okta-angular';

const CALLBACK_PATH = 'login/callback';

const routes: Routes = [
  {path: CALLBACK_PATH, component: OktaCallbackComponent,},
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent,  canActivate: [ OktaAuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
