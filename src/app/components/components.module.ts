import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { NavigationButtonComponent } from './navigation-header/navigation-button/navigation-button.component';
import { RouterModule } from '@angular/router';
import { SpecialisationCardComponent } from './home/specialisation-card/specialisation-card.component';



@NgModule({
  declarations: [
    NavigationHeaderComponent,
    NavigationButtonComponent,
    SpecialisationCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationHeaderComponent,
    SpecialisationCardComponent
  ]
})
export class ComponentsModule { }
