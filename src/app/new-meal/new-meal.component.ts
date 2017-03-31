import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {
  @Input() childMeals: Meal[];

  constructor() { }

  newMeal(name, details, calories) {
    if (name === "") {
      name = "no name entered";
    }

    if (details === "") {
      details = "no details entered";
    }

    if (calories === "") {
      calories = "0";
    }

    var meal = new Meal(name, details, calories);
    this.childMeals.push(meal);
  }

  ngOnInit() {
  }
}
