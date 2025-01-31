import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationButtonComponent } from './navigation-header/navigation-button/navigation-button.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationHeaderComponent,
    NavigationButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationHeaderComponent
  ]
})
export class ComponentsModule { }
