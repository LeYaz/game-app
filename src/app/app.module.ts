import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeuAlbumComponent } from './jeu-album/jeu-album.component';
import { HttpClientModule } from '@angular/common/http';
import { CategorieComponent } from './categorie/categorie.component';
import { SouscategorieComponent } from './souscategorie/souscategorie.component';
import { ResultatComponent } from './resultat/resultat.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateJeuComponent } from './create-jeu/create-jeu.component';
import { TypeJeuComponent } from './type-jeu/type-jeu.component';
import { CreateJeuQuatreChoixComponent } from './create-jeu/create-jeu-quatre-choix/create-jeu-quatre-choix.component';
import { CreateJeuQuatreImgComponent } from './create-jeu/create-jeu-quatre-img/create-jeu-quatre-img.component';
import { CreateJeuResumeCatComponent } from './create-jeu/create-jeu-resume-cat/create-jeu-resume-cat.component';


@NgModule({
  declarations: [
    AppComponent,
    JeuAlbumComponent,
    CategorieComponent,
    SouscategorieComponent,
    ResultatComponent,
    HeaderComponent,
    FooterComponent,
    CreateJeuComponent,
    TypeJeuComponent,
    CreateJeuQuatreChoixComponent,
    CreateJeuQuatreImgComponent,
    CreateJeuResumeCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
