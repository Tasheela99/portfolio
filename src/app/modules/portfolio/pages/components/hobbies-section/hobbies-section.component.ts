import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-hobbies-section',
  templateUrl: './hobbies-section.component.html',
  styleUrls: ['./hobbies-section.component.scss']
})
export class HobbiesSectionComponent {

  constructor() {
  }


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
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    autoplayHoverPause:true,
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

  hobbies: any[] = [
    {hobbyName: 'CYCLING', iconClass: 'fa-solid fa-bicycle'},
    {hobbyName: 'READING', iconClass: 'fa-solid fa-book-open-reader'},
    {hobbyName: 'CODING', iconClass: 'fa-solid fa-terminal'},
    {hobbyName: 'HIKING', iconClass: 'fa-solid fa-person-hiking'},
    {hobbyName: 'GAMES', iconClass: 'fa-solid fa-gamepad'},
    {hobbyName: 'CHESS', iconClass: 'fa-solid fa-chess'},
    {hobbyName: 'MOVIES', iconClass: 'fa-solid fa-video'},
    {hobbyName: 'COFFEE', iconClass: 'fa-solid fa-mug-hot'},
    {hobbyName: 'MUSIC', iconClass: 'fa-solid fa-music'},
    {hobbyName: 'LEARN', iconClass: 'fa-solid fa-graduation-cap'},
  ];


}
