import { Component, OnInit } from '@angular/core';
import { Observable, pipe, interval,  } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private date: any = new Date(1999, 11, 2);
  constructor() {
   // this.getProducts()
  }
  ngOnInit() {
  
  }
}