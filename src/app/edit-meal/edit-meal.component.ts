import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {
  @Input() meal: Meal;

  editMeal(meal, name, details, calories) {
    meal.name = name;
    meal.details = details;
    meal.calories = calories;
  }

  constructor() { }

  ngOnInit() {
  }

}
