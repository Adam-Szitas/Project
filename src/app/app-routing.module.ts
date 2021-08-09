import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ControlComponent } from './components/control/control.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '' , component: MainComponent
  },
  {
    path: 'authentication', component: AuthenticationComponent
  },
  {
    path: 'loggedin/:data', component: ControlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
