import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterMeals: Meal[] = [
    new Meal('Pizza', 'pepperonis, mushrooms', 300),
    new Meal('Fettuccine Alfredo', 'pasta, cream, cheese, butter', 450),
    new Meal('Carrot Sticks', 'carrots', 65),
    new Meal('Burger', 'bacon, cheese, ketchup', 625),
    new Meal('Black Bean Burger', 'black bean patty, lettuce, tomatoes', 115),
    new Meal('Popcorn', 'butter, popcorn', 170),
    new Meal('Thanksgiving Dinner', 'turkey, mashed potatoes, creanberry sauce, stuffing', 4500),
    new Meal('Pastrami Sandwich', 'rye bread, pastrami, mustard', 650)
  ];
}
