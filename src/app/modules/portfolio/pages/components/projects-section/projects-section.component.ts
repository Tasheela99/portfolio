import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {

  projects:any[]=[
    {projectName:"Hospital Management System",technologies:"Laravel | MYSQL | Bootstrap",description:"Vaccination and Hospital Management System Using Laravel And MYSQL",gitLink:"https://github.com/Tasheela99/CoviGuard-VaccinationSystem.git",imageLink:"https://img.freepik.com/free-vector/hospital-clinic-building-with-ambulance-car-truck_107791-2645.jpg?w=1380&t=st=1699076102~exp=1699076702~hmac=22a50ba1e13bc21790bb9cebdce43707528ec3fee923cd9173cef2ae27ee6e00"},
    {projectName:"Hospital Management System",technologies:"JavaScript | FireBase | Bootstrap",description:"Hospital Management System Using Pure Javascript And Firebase, CRUD Operations",gitLink:"https://github.com/Tasheela99/hospitalsystem.git",imageLink:"https://img.freepik.com/free-vector/hospital-corridor-interior-with-reception-desk_107791-18289.jpg?w=1380&t=st=1699076137~exp=1699076737~hmac=e88033c4b1656206be77bf476d0d6ac695f7f7610c6aca2a3c708318b584c29e"},
    {projectName:"BMI Calculator",technologies:"Flutter | Firebase ",description:"Very Simple Flutter App with Firebase Login , Signup and able to calculate the BMI data and able to see previous BMI Data",gitLink:"https://github.com/Tasheela99/bmiapp.git",imageLink:"https://img.freepik.com/free-vector/ph-scale-diagram-white-background_1308-55245.jpg?w=1380&t=st=1699076190~exp=1699076790~hmac=c20c5c1aa71c5ac8b8fb6c9c3bd6d1c91f3dfe279d4424accbe94d5528f90a6f"},
    {projectName:"POS System",technologies:"Java | MYSQL | JavaFX | SceneBuilder ",description:"Simple Point Of Sale System using javaFx And MYSQL",gitLink:"https://github.com/Tasheela99/point-of-sale.git",imageLink:"https://img.freepik.com/free-vector/consumer-rights-protection-concept-definition-consumer-right-is-right-have-information-about-quality-potency-quantity-purity-price-standard-goods-services-vector-flat_1150-60891.jpg?w=1380&t=st=1699076235~exp=1699076835~hmac=d94285fc0b33a0114749e9518ed56504d190d73acda067c9685f89bd6c5cf555"},
    {projectName:"Go Travel WebSite Clone",technologies:"Angular",description:"Go Travel, Travelling Agency Web Site Clone Using Angular",gitLink:"https://github.com/Tasheela99/gotravel.git",imageLink:"https://img.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_1284-30189.jpg?w=1380&t=st=1699076272~exp=1699076872~hmac=23e3fe2f25c9e47300ca14bc60dfdc7ff1328954c25ec605e6f8cc488ce11bdd"},
    {projectName:"My Portfolio",technologies:"Angular",description:"Single Page Portfolio For Myself Using Angular",gitLink:"https://github.com/Tasheela99/my-portfolio.git",imageLink:"https://img.freepik.com/free-vector/corporate-company-profile-brochure-template-design_237398-481.jpg?w=1380&t=st=1699076323~exp=1699076923~hmac=651197f5f402f3cb5c8c55b4604d6291439e6e182151544738b692f9e60aeb88"},
  ];


}
