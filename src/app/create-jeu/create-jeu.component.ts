import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from '../categorie/categorie-model';
import { CategorieService } from '../categorie/categorie.service';
import { User } from '../compte/user-model';
import { JeuAlbum } from '../jeu-album/jeu-album-model';
import { Question } from '../jeu-album/question-model';
import { QuizService } from '../quiz-list/quiz.service';
import { Quiz } from '../quiz-list/quiz/quiz-model';
import { SousCategorie } from '../souscategorie/soucategorie-model';
import { SouscategorieService } from '../souscategorie/souscategorie.service';
import { TypeJeu } from '../type-jeu/type-jeu-model';
import { TypeJeuService } from '../type-jeu/type-jeu.service';

@Component({
  selector: 'app-create-jeu',
  templateUrl: './create-jeu.component.html',
  styleUrls: ['./create-jeu.component.css']
})
export class CreateJeuComponent implements OnInit {
  jeuForm:FormGroup;
  quizForm:FormGroup;

  constructor(private fb:FormBuilder, private categorieService: CategorieService, private sousCategorieService: SouscategorieService,
     private typeJeuService: TypeJeuService, private quizService:QuizService) { }

  listQuestion: Question [] = new Array();
  categories: Categorie[] = new Array();
  sousCategories: SousCategorie[] = new Array();
  typeJeu: TypeJeu[] = new Array();
  actualcatid:number;
  actualsouscatid:number;
  showcreatejeu:number=0;
  newscat:string;
  categorieSelected:Categorie=new Categorie(0,"categorie");
  sousCategorieSelected:SousCategorie=new SousCategorie(0,"souscategorie",0);
  typeJeuSelected: TypeJeu=new TypeJeu(0,"type de jeu");
  showquizresume:boolean=false;
  

  ngOnInit(): void {
    let catList;
    let typelist;
    this.categorieService.getCategorie().subscribe(cat =>{
      catList = cat;
      catList.forEach(e => {
        const id = e.id;
        const nom = e.nom;
        const categorie = new Categorie(id, nom);
        this.categories.push(categorie);
      })
    })

    this.typeJeuService.getTypeJeu().subscribe(tj =>{
      typelist = tj;
      typelist.forEach(e =>{
        const id = e.id;
        const nom = e.nom;
        const typejeu = new TypeJeu(id, nom);
        this.typeJeu.push(typejeu);
      })
    })
    this.jeuForm = this.fb.group({
      categorie: [null,Validators.required],
      souscategorie:[null, Validators.required],
      typejeu:[null, Validators.required],
      inputcat:[null],
      inputsouscat:[null]
    });
    this.quizForm = this.fb.group({
      nom: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  submit() {
    console.log("Form Submitted")
    console.log(this.jeuForm.value.categorie)
    this.showcreatejeu = this.jeuForm.value.typejeu;

    if(this.jeuForm.value.categorie!=0){
      this.categorieSelected=this.categories[this.jeuForm.value.categorie-1];
    }else{
      this.categorieSelected = new Categorie(0,this.jeuForm.value.inputcat);
      //Créer la catégorie 
      //Requete Post
      this.categorieService.addCategorie(this.categorieSelected).subscribe(res=>{
        this.categorieSelected.id = res.id;
      })
    }

    if(this.jeuForm.value.souscategorie!=0){
      this.sousCategorieSelected=this.sousCategories[this.jeuForm.value.souscategorie-1];
    }else{
      this.sousCategorieSelected = new SousCategorie(0,this.jeuForm.value.inputsouscat,this.categorieSelected.id);
      this.sousCategorieService.addSousCagetoire(this.sousCategorieSelected).subscribe(res =>{
        this.sousCategorieSelected.id = res.id;
      })
    }
    
    this.typeJeuSelected = this.typeJeu[this.jeuForm.value.typejeu-1];
  }


  /**
   * 
   * @param e element selectionner
   * Affiche les sous categorie suivant la categorie selectionner
   */
  changeCategorie(e){
    console.log(e.target.value);
    let list;
    let tab = e.target.value.split(' ');
    let catid = tab[1];
    if(catid != this.actualcatid){
      this.actualcatid = catid;
      this.sousCategories=[];
      if(catid!=0){
      this.sousCategorieService.getSousCategoriebyCategorie(catid).subscribe(scat =>{
        list = scat;
        list.forEach(e => {
          const id = e.id;
          const nom = e.nom;
          const souscat = new SousCategorie(id, nom, catid);
          this.sousCategories.push(souscat);
        })
      })
      this.jeuForm.get('inputcat').clearValidators();
      this.jeuForm.get('inputcat').updateValueAndValidity();
      if(this.actualsouscatid!=0){
        this.jeuForm.get('inputsouscat').clearValidators();
        this.jeuForm.get('inputsouscat').updateValueAndValidity();
      }
      }else{
        this.jeuForm.get('inputcat').setValidators([Validators.required]);
        this.jeuForm.get('inputsouscat').setValidators([Validators.required]);
        this.jeuForm.get('inputcat').updateValueAndValidity();
        this.jeuForm.get('inputsouscat').updateValueAndValidity();

        // Creer une nouvelle categorie a partir du service

        //Creer sous caatégorie a partir du service

      }
      
    }
    
    
  }

  changeSousCategorie(e){
    let tab = e.target.value.split(' ');
    let scatid = tab[1];
    this.actualsouscatid = scatid;
    if(this.actualsouscatid == 0 ){
      this.jeuForm.get('inputsouscat').setValidators([Validators.required]);
      this.jeuForm.get('inputsouscat').updateValueAndValidity();
    }else{
      this.jeuForm.get('inputsouscat').clearValidators();
      this.jeuForm.get('inputsouscat').updateValueAndValidity();
    }
  }

  ajouterQuestion(ja:Question){
    const question:Question = new Question(ja.id, ja.question, ja.option,  ja.image, ja.valide, null);
    console.log(JSON.stringify(question));
    this.listQuestion.push(question);
    console.log('composant parent : '+ ja.valide)
    
  }

  submitQuiz(){
    let user:User = new User(sessionStorage.getItem('username'), sessionStorage.getItem('email'), "");
    user.id = parseInt( sessionStorage.getItem("id"));
    let quiz:Quiz = new Quiz(0, this.quizForm.value.nom, this.quizForm.value.description, this.typeJeuSelected, this.sousCategorieSelected, this.sousCategorieSelected, user);
    this.quizService.addQuiz(quiz).subscribe(res =>{
      console.log(res);
      quiz.id= res.id;
      this.listQuestion.forEach(element => {
        const question:Question = new Question(0, element.question, element.option, element.image, element.valide, quiz);
        this.quizService.addQuestion(question).subscribe(rep =>{
          console.log("post de question : " +rep)
        }, error =>{
          console.log(error);
        });
      });
    }, err =>{
      console.log(err);
    })

    //Post des question !!!
  }
 

   finaliserQuiz(rep:boolean){
    this.showquizresume = rep;    
   }

  

}
