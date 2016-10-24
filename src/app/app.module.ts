import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import { RouterModule }   from '@angular/router';
import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {LivresComponent} from './livres/livres.component';
import {CdsComponent} from './cds/cds.component';
import {FilmsComponent} from './films/films.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {HomepageComponent} from './homepage/homepage.component';

import {FilmsService} from './services/films.service';
import {CdsService} from './services/cds.service';
import {LivresService} from './services/livres.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    CdsComponent,
    FilmsComponent,
    CatalogueComponent,
    HomepageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [FilmsService, CdsService, LivresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
