import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {
  @Input() meal: Meal;
  @Output() clickEditToggleSender = new EventEmitter();

  closeEdit(meal: Meal) {
    this.clickEditToggleSender.emit(meal);
  }

  editMeal(meal, name, details, calories) {
    meal.name = name;
    meal.details = details;
    meal.calories = calories;
    meal.edit = false;
  }

  constructor() { }

  ngOnInit() {
  }
}
