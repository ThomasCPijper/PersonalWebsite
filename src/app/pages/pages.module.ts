import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentsModule } from "../components/components.module";



@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
],
  exports: [
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    ContactComponent
  ]
})
export class PagesModule { }
