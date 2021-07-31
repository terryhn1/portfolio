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
import { ProfileBannerComponent } from './profile-banner/profile-banner.component';
import { ProjBannerComponent } from './proj-banner/proj-banner.component';
import { WorkBannerComponent } from './work-banner/work-banner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LeagueSiteComponent } from './league-site/league-site.component';
import { LeagueChampionComponent } from './league-champion/league-champion.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { LeagueSearchComponent } from './league-search/league-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectCardComponent,
    FooterComponent,
    WorkProfileComponent,
    HomeComponent,
    ProfileBannerComponent,
    ProjBannerComponent,
    WorkBannerComponent,
    NotFoundComponent,
    LeagueSiteComponent,
    LeagueChampionComponent,
    LeagueSearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
