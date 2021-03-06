import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  @Output() ingredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  NewIngredient() {
    this.ingredient.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value);
  }

}
