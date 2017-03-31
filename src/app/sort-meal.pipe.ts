import { Pipe, PipeTransform, Input } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'sortMeal'
})
export class SortMealPipe implements PipeTransform {
  transform(input: Meal[], mealChoice) {
    var output: Meal[] = [];
    if(mealChoice === 'high_calories') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 600) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (mealChoice === 'low_calories') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 200) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (mealChoice === 'medium_calories') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 200 && input[i].calories <= 600) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
