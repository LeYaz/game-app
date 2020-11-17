import { Component, Input, OnInit } from '@angular/core';
import { Categorie } from 'src/app/categorie/categorie-model';
import { SousCategorie } from 'src/app/souscategorie/soucategorie-model';
import { TypeJeu } from 'src/app/type-jeu/type-jeu-model';

@Component({
  selector: 'app-create-jeu-resume-cat',
  templateUrl: './create-jeu-resume-cat.component.html',
  styleUrls: ['./create-jeu-resume-cat.component.css']
})
export class CreateJeuResumeCatComponent implements OnInit {

  @Input() categorie: Categorie;
  @Input() sousCategorie : SousCategorie;
  @Input() typeJeu: TypeJeu;
  constructor() { }

  ngOnInit(): void {
  }

}
