import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroSectionComponent } from './pages/components/hero-section/hero-section.component';
import { AboutSectionComponent } from './pages/components/about-section/about-section.component';
import { WorksSectionComponent } from './pages/components/works-section/works-section.component';
import { HobbiesSectionComponent } from './pages/components/hobbies-section/hobbies-section.component';
import { ContactSectionComponent } from './pages/components/contact-section/contact-section.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { NavbarComponent } from './pages/components/navbar/navbar.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    WorksSectionComponent,
    HobbiesSectionComponent,
    ContactSectionComponent,
    NavbarComponent
  ],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        CarouselModule
    ]
})
export class PortfolioModule { }
