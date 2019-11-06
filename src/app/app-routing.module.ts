import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FullListComponent } from './full-list/full-list.component';
import { SeriesComponent } from './series/series.component';
import { SequelComponent } from './sequel/sequel.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: FullListComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'sequel', component: SequelComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
