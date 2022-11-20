import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EpicsComponent } from './epics/epics.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyStoriesComponent } from './my-stories/my-stories.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'my-projects', component: MyProjectsComponent},
  {path: 'my-projects/:id', component: EpicsComponent},
  {path: 'my-projects/:projectId/:id', component: MyStoriesComponent},
  {path: 'my-projects/:projectId/:epicId/:id', component: TasksComponent},
  {path: 'my-stories', component: MyStoriesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }