import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from '../quiz-list/quiz/quiz-model';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(quiz: Quiz[], searchText: string): any[] {
    if(!quiz) return [];
    if(!searchText) return quiz;

    searchText = searchText.toLowerCase();

    return quiz.filter(it => {
      return it.nom.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText) || it.categorie.nom.toLowerCase().includes(searchText) || it.souscategorie.nom.toLowerCase().includes(searchText);
    });
  }

}
