import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { WorkProfileComponent } from './work-profile/work-profile.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectCardComponent,
    FooterComponent,
    WorkProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
