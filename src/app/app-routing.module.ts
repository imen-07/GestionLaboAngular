import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleDialogComponent } from './add-article-dialog/add-article-dialog.component';
import { AffectComponent } from './affect/affect.component';
import { ArticlesComponent } from './articles/articles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EVENTSComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembersComponent } from './members/members.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path:'',
  pathMatch :'full',
  redirectTo :'login',
},
{ path:'login',
  pathMatch :'full',
  component:LoginComponent,
},
  { path:'members',
    pathMatch :'full',
    component:MembersComponent,
  },
  { path:'creat',
    pathMatch :'full',
    component:MemberFormComponent,
  },
  {
    path:'members/:id/edit',
    pathMatch :'full',
    component:MemberFormComponent,
  },
  {
    path:'articles',
    pathMatch :'full',
    component:ArticlesComponent,
  },
  { path:'articles/creat',
    pathMatch :'full',
    component:AddArticleDialogComponent,
  },
  {
    path:'articles/:Id/affect',
    pathMatch :'full',
    component:AffectComponent,
  },
  {
    path:'articles/:Id/edit',
    pathMatch :'full',
    component:AddArticleDialogComponent,
  },
  {
    path:'dashboard',
    pathMatch :'full',
    component:DashboardComponent,
  },
  {
    path:'tools',
    pathMatch :'full',
    component:ToolsComponent,
  },
  {
    path:'Events',
    pathMatch :'full',
    component:EVENTSComponent,
  },
  { path:'**', //lezemha tkoun o5er wa7da !!!!!
  pathMatch :'full',
  redirectTo :'members',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
