import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JeuAlbum } from 'src/app/jeu-album/jeu-album-model';
import { JeuAlbumService } from 'src/app/jeu-album/jeu-album.service';
import { Question } from 'src/app/jeu-album/question-model';
import { Image } from '../image-model';

@Component({
  selector: 'app-create-jeu-quatre-choix',
  templateUrl: './create-jeu-quatre-choix.component.html',
  styleUrls: ['./create-jeu-quatre-choix.component.css']
})
export class CreateJeuQuatreChoixComponent implements OnInit {
  
  question:Question = new Question(0,"",["","","",""],null, "", null);
  questionForm:FormGroup;
  @Output() jeuAlbumEvent = new EventEmitter<Question>();
  @Output() quizEvent = new EventEmitter<boolean>();
  imgurl="assets/img/default.jpg";
  imagejeu:File = null;
  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: [null, Validators.required],
      choix1:[null, Validators.required],
      choix2:[null, Validators.required],
      choix3:[null, Validators.required],
      choix4:[null, Validators.required],
      valide:[null, Validators.required],
      image:[null, Validators.required],
      choix : this.fb.array([null,null,null,null], Validators.required)

    })
  }

  ajouterQuestion(){
    this.jeuAlbumEvent.emit(this.question);
  }

  submitQuestion(){
    // console.log(this.questionForm.value);
  }

  get choix(){
    return this.questionForm.get('choix') as FormArray;
  }

  addChoix(){
    this.choix.setValue([this.questionForm.value.choix1,this.questionForm.value.choix2,this.questionForm.value.choix3,this.questionForm.value.choix4]); 
  }

  onFileSelect(event){
    const allowed_types = ['image/png', 'image/jpeg'];
    // if (event.target.files.length > 0) {
    //   const file = event.target.files[0];
    //   if (!_.includes(allowed_types, file.type)) {
    //     alert('Only Images are allowed ( JPG | PNG )');
    //   } else {
    //     this.questionForm.get('image').setValue(file);
    //   }
    // }
    
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      
      reader.onload = (e:any)=>{
        this.imgurl = e.target.result;
      }

      this.imagejeu = <File> event.target.files[0];
    }
  }

  onUploadImage(){
    console.log("click upload")
    
  }

   sendQuestion(){
    this.question.question = this.questionForm.value.question;
    this.question.option = this.questionForm.value.choix;
    this.question.valide = this.questionForm.value.valide;
    // Ajouter l'upload de l'image et bind l'url dans jeuAlbum.image
    const fd = new FormData();
    fd.append('files', this.imagejeu);
    console.log(fd);
    this.http.post<any>('http://localhost:1337/upload', fd).subscribe(res => {
      console.log(res);
      this.question.image = new Image(res[0].id, res[0].name, res[0].url);
      this.jeuAlbumEvent.emit(this.question);
      this.imgurl = "assets/img/default.jpg";
      this.questionForm.reset();
    })
    
    
  }

  sendQuiz(){
    this.question.question = this.questionForm.value.question;
    this.question.option = this.questionForm.value.choix;
    this.question.valide = this.questionForm.value.valide;
    // Ajouter l'upload de l'image et bind l'url dans jeuAlbum.image
    const fd = new FormData();
    fd.append('files', this.imagejeu);
    console.log(fd);
    this.http.post<any>('http://localhost:1337/upload', fd).subscribe(res => {
      console.log(res);
      this.question.image = new Image(res[0].id, res[0].name, res[0].url);
      this.jeuAlbumEvent.emit(this.question);
      this.imgurl = "assets/img/default.jpg";
      this.questionForm.reset();
      this.quizEvent.emit(true);
    })
    
  }
}
