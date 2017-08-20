import { NgModule } from '@angular/core';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from 'app/shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingListModule {


}
