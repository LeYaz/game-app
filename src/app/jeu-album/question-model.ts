import { Image } from '../create-jeu/image-model';
import { Quiz } from '../quiz-list/quiz/quiz-model';

export class Question{
    id:number;
    question: string;
    option : string[];
    image : Image;
    valide : string;
    quiz: Quiz;

    constructor(id:number, question:string, option:string[], image:Image, 
        valide:string, quiz:Quiz){
            this.id =id;
            this.question = question;
            this.option = option;
            this.image = image;
            this.valide = valide;
            this.quiz = quiz;
        }
}