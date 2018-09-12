import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { CatScoreComponent } from './components/cat-score/cat-score.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    CatScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
