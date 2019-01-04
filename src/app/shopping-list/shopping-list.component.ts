import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { version } from 'punycode';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5),
  ];

  constructor() { }

  ngOnInit() {

  }
  
  onIngredientCreated(event: Ingredient) {
    if (event) {
      this.ingredients.push(event)
    }
  }

}
