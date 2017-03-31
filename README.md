# Meal Tracker
#### By Ash Laidlaw

This project is meant to learn more about how to use Angular. Its purpose is to be a meal tracker, where a user can log his/her meals and keep track of calorie count. The user will be able to enter a meal, view previous meals, and sort meals by calorie count. A user will also be able to edit previous meals once they have been entered.

## Technologies Used

* HTML
* CSS
* JavaScript
* Angular 2
* Bootstrap CDN

## Production Steps

1. Using Angular CLI, run `ng new meal-tracker`
2. Create Meal object, with properties for name, details, and calories
   * Create model for Meal object
3. Create form for user to enter meal, which will instantiate a new meal object
   * `ng g component new-meal` - Form and methods associated with instantiating new Meal object
4. Create some sort of interface (table, list, etc.) which will show the meals that have been entered
   * `ng g component meal-list` - Methods to show meals
5. Allow user to edit the meals, which will update meals
   * `ng g component edit-meal` - Form and methods associated with editing a meal
6. Allow user to sort the meals by calorie count
   * `ng g pipe sort-meal` - Create a pipe to allow user to selectively show meals with certain calorie counts
7. Allow user to delete an entry
   * `ng g component delete-meal` - Delete button which will remove an instance of a meal

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Clone/Build

1. Clone the project from `https://github.com/Yhbv24/js-project-3`.
2. Navigate into the project folder.
3. Run `npm install`, then run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
