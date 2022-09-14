import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biscuits & Gravy',
        'Biscuits with Sausage Gravy',
        '../../../../images/BiscuitsNGravy.jpg'),
    new Recipe('Cold Cereal',
        'Cereal with Added Milk',
        '../../../../images/breakfast-pouring-milk-into-corn-cereal.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
