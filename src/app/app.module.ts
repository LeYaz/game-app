import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeuAlbumComponent } from './jeu-album/jeu-album.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './categorie/categorie.component';
import { SouscategorieComponent } from './souscategorie/souscategorie.component';
import { ResultatComponent } from './resultat/resultat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    JeuAlbumComponent,
    CategorieComponent,
    SouscategorieComponent,
    ResultatComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
