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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectCardComponent,
    FooterComponent,
    WorkProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
