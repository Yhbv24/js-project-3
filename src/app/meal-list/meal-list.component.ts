import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  @Input() childMeals: Meal[];

  calorieColors(meal) {
    if (meal.calories >= 600) {
      return "many_calories";
    } else if (meal.calories >= 400) {
      return "medium_calories";
    } else {
      return "few_calories";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
