import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeagueChampionComponent } from './league-champion/league-champion.component';
import { LeagueSiteComponent } from './league-site/league-site.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { WorkProfileComponent } from './work-profile/work-profile.component';

const routes: Routes = [{path: 'profile', component: ProfileComponent},
                        {path: 'projects', component: ProjectCardComponent},
                        {path: 'work', component: WorkProfileComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'projects/league-site', component: LeagueSiteComponent},
                        {path: 'projects/league-site/:championName', component: LeagueChampionComponent},
                        {path:'', redirectTo: 'home', pathMatch:'full'},
                        {path: '404', component: NotFoundComponent},
                        {path:'**', redirectTo: '/404', pathMatch : 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
