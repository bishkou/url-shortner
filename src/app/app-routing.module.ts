import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UrlComponent} from './url/url.component';
import {AppComponent} from './app.component';
import {SlugComponent} from './slug/slug.component';

const routes: Routes = [
  { path: '', component: UrlComponent, pathMatch: 'full'},
  { path: ':id', component: SlugComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
