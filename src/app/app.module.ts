import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullListComponent } from './full-list/full-list.component';
import { SeriesComponent } from './series/series.component';
import { SequelComponent } from './sequel/sequel.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FullListComponent,
    SeriesComponent,
    SequelComponent,
    StatisticsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
