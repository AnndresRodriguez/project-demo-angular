import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {PrincipalComponent} from './dashboard/dashboard/principal/principal.component';
import {ButtonsComponent} from './dashboard/dashboard/buttons/buttons.component';
import {CardsComponent} from './dashboard/dashboard/cards/cards.component';
import {ColorsComponent} from './dashboard/dashboard/colors/colors.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'principal',
        component: PrincipalComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      }
    ]
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule {}
export const routingComponents = [DashboardComponent, LoginComponent];

