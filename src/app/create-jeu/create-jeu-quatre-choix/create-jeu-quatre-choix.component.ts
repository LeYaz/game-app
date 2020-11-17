import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JeuAlbum } from 'src/app/jeu-album/jeu-album-model';
import { JeuAlbumService } from 'src/app/jeu-album/jeu-album.service';

@Component({
  selector: 'app-create-jeu-quatre-choix',
  templateUrl: './create-jeu-quatre-choix.component.html',
  styleUrls: ['./create-jeu-quatre-choix.component.css']
})
export class CreateJeuQuatreChoixComponent implements OnInit {
  
  jeuAlbum:JeuAlbum = new JeuAlbum(0, "", ["","","",""], "","");
  questionForm:FormGroup;
  @Output() jeuAlbumEvent = new EventEmitter<JeuAlbum>();
  imgurl="...";
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
    this.jeuAlbumEvent.emit(this.jeuAlbum);
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
    const fd = new FormData();
    fd.append('files', this.imagejeu);
    console.log(fd);
    this.http.post('http://localhost:1337/upload', fd).subscribe(res => {
      console.log(res);
    })
  }

  sendQuestion(){
    this.jeuAlbum.question = this.questionForm.value.question;
    this.jeuAlbum.option = this.questionForm.value.choix;
    this.jeuAlbum.valide = this.questionForm.value.valide;
    console.log("jeu envoyé : "+this.jeuAlbum);
    // Ajouter l'upload de l'image et bind l'url dans jeuAlbum.image
    this.jeuAlbumEvent.emit(this.jeuAlbum);
  }
}
