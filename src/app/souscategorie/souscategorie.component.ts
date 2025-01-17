import { Component, OnInit } from '@angular/core';
import { SousCategorie } from './soucategorie-model';
import { SouscategorieService } from './souscategorie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categorie } from '../categorie/categorie-model';

@Component({
  selector: 'app-souscategorie',
  templateUrl: './souscategorie.component.html',
  styleUrls: ['./souscategorie.component.css']
})
export class SouscategorieComponent implements OnInit {
  

  constructor(private sousCategorieService:SouscategorieService, private router:Router, private route:ActivatedRoute) { }

  souscategories: SousCategorie[]=new Array();

  ngOnInit(): void {
    let liste;
    let catid = parseInt(this.route.snapshot.paramMap.get('id'));
    this.sousCategorieService.getSousCategoriebyCategorie(catid).subscribe(scat =>{
      liste = scat;
      liste.forEach(e => {
        const id = e.id;
        const nom = e.nom;
        const cat = new Categorie(e.categorie.id, e.categorie.nom);
        const souscat = new SousCategorie(id, nom, cat);
        this.souscategories.push(souscat);
      })
    })
  }

  choixJeu(sc:SousCategorie){
    this.router.navigate(['/jeuAlbum', sc.id], {relativeTo: this.route})
  }

}
