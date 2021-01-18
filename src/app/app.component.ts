import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backend:string=`nestJS`;
  frontend:string =`angularJS`;
  scrapUrl:string=`https://www.naranja.com/comercios-amigos`;
  serverUrl:string = `http://localhost:3000/scrap`;
}
