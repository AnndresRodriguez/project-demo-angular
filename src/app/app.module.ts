import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './dashboard/dashboard/principal/principal.component';
import { ButtonsComponent } from './dashboard/dashboard/buttons/buttons.component';
import { CardsComponent } from './dashboard/dashboard/cards/cards.component';
import { ColorsComponent } from './dashboard/dashboard/colors/colors.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PrincipalComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
