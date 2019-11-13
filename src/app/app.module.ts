import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullListComponent } from './full-list/full-list.component';
import { SeriesComponent } from './series/series.component';
import { SequelComponent } from './sequel/sequel.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SeriesEpisodesComponent } from './series-episodes/series-episodes.component';
import { AddNewComponent } from './add-new/add-new.component';
import { AddNewObjectComponent } from './add-new-object/add-new-object.component';
import { AddNewFieldsComponent } from './add-new-fields/add-new-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    FullListComponent,
    SeriesComponent,
    SequelComponent,
    StatisticsComponent,
    NotFoundComponent,
    SeriesEpisodesComponent,
    AddNewComponent,
    AddNewObjectComponent,
    AddNewFieldsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
