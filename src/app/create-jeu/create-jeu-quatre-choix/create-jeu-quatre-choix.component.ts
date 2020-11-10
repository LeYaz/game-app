import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private fb:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: [null],
      choix1:[null],
      choix2:[null],
      choix3:[null],
      choix4:[null],
      valide:[null],
      image:this.fb,
      choix : this.fb.array([null,null,null,null])

    })
  }

  ajouterQuestion(){
    this.jeuAlbumEvent.emit(this.jeuAlbum);
  }

  submitQuestion(){
    console.log(this.questionForm.value);
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
    }
  }

  onUploadImage(){
    this.http.post()
  }
}
