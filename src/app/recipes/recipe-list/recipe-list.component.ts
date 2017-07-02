import { Component, OnInit } from '@angular/core';

import { Recipe } from 'app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
     new Recipe('A Test Recipe', 'Just a test', 'https://cdn.pixabay.com/photo/2015/04/08/13/14/food-712666_960_720.jpg'),
     new Recipe('Another Recipe', 'One two three', 'https://cdn.pixabay.com/photo/2015/04/08/13/14/food-712666_960_720.jpg')
   ];

  constructor() { }

  ngOnInit() {
  }

}
