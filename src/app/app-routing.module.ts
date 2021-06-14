import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { WorkProfileComponent } from './work-profile/work-profile.component';

const routes: Routes = [{path: 'profile', component: ProfileComponent},
                        {path: 'projects', component: ProjectCardComponent},
                        {path: 'work', component: WorkProfileComponent},
                        {path: 'home', component: ProfileComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
