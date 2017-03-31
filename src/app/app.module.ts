import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { DeleteMealComponent } from './delete-meal/delete-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMealComponent,
    MealListComponent,
    EditMealComponent,
    DeleteMealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
