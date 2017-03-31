import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-delete-meal',
  templateUrl: './delete-meal.component.html',
  styleUrls: ['./delete-meal.component.css']
})
export class DeleteMealComponent implements OnInit {
  @Input() meal: Meal;
  @Input() childMeals: Meal[];

  delete(meal) {
    this.childMeals.splice(this.childMeals.indexOf(meal), 1);
  }

  constructor() { }

  ngOnInit() {
  }
}
