import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Biscuit Dough', 1, 'tube'),
    new Ingredient('Sausage Gravy', 2, 'packets'),
    new Ingredient('Suasage Meat', 0.5, 'lbs')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
