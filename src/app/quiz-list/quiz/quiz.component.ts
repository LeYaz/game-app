import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from './quiz-model';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input() quiz:Quiz;

  constructor() { }



  ngOnInit(): void {
  }

}
