import { Component, Input, OnInit } from '@angular/core';
import { JeuAlbum } from 'src/app/jeu-album/jeu-album-model';
import { Question } from 'src/app/jeu-album/question-model';

@Component({
  selector: 'app-resume-question',
  templateUrl: './resume-question.component.html',
  styleUrls: ['./resume-question.component.css']
})
export class ResumeQuestionComponent implements OnInit {

  @Input() question:Question;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
