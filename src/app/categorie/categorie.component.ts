import { Component, OnInit } from '@angular/core';
import { CategorieService } from './categorie.service';
import { Categorie } from './categorie-model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private categorieService: CategorieService, private router:Router, private route:ActivatedRoute) { }
  categories: Categorie[] = new Array();

  ngOnInit(): void {
    let listecategorie;

    this.categorieService.getCategorie().subscribe(cat =>{
      listecategorie = cat;
      listecategorie.forEach(e => {
        const id = e.id;
        const nom = e.nom;

        const categorie = new Categorie(id, nom);
        this.categories.push(categorie);
      })
    })
  }

  choixCategorie(cat:Categorie ){
    let liste;

    // this.categorieService.getSousCategorie(cat).subscribe(scat =>{
    //   liste = scat;
    //   this.categories = [];
    //   liste.forEach(e => {
    //     const id = e.id;
    //     const nom = e.nom;

    //     const categorie = new Categorie(id, nom);
    //     this.categories.push(categorie);
    //   })
    // });
    this.router.navigate(['/souscategorie', cat.id], {relativeTo: this.route});
  }

}
