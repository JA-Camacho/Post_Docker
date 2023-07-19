import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SesionComponent } from './sesion/sesion.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'registro', component:SesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
