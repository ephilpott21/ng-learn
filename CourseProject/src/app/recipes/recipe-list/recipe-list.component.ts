import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Output() recipes: Recipe[] = [
    new Recipe('Biscuits & Gravy',
        'Biscuits with Sausage Gravy',
        'https://tinyurl.com/3wvhr8s4'),
    new Recipe('Cold Cereal',
        'Cereal with Added Milk',
        'https://tinyurl.com/25secunv')
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
   }

}
