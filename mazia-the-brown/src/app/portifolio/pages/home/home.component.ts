import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  age: number;

  constructor() { }

  ngOnInit() {
    const bornDate = 1996;
    const actualYYear = new Date().getFullYear();
    this.age = (actualYYear - bornDate);    
  }

}
