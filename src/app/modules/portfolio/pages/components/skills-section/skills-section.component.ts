import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 4000,
    nav:false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 8
      }
    },
  };

  slidesIcon: any[] = [
    {technology: 'HTML', iconClass: 'fab fa-html5'},
    {technology: 'CSS', iconClass: 'fab fa-css3'},
    {technology: 'JavaScript', iconClass: 'fab fa-js'},
    {technology: 'Java', iconClass: 'fab fa-java'},
    {technology: 'Angular', iconClass: 'fab fa-angular'},
    {technology: 'PHP', iconClass: 'fab fa-php'},
    {technology: 'Laravel', iconClass: 'fab fa-laravel'},
    {technology: 'Spring Boot', iconClass: 'fab fa-java'},
    {technology: 'Git', iconClass: 'fab fa-git'},
    {technology: 'GitHub', iconClass: 'fab fa-github'},
  ];

}
