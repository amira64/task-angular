import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:'<h1>{{ myVariable1 }}</h1>' 
  
})
export class AppComponent {
  title = 'webpage1';
  
}
