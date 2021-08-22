import { Component, OnInit } from '@angular/core';
import { RecipesModel } from 'src/app/Model/Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:RecipesModel[]=[
new RecipesModel('Test Recipe','Test Description','https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?webp=true&quality=90&resize=940%2C399')
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
