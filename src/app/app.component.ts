import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service/http-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'training-app';
  constructor(private _httpService: HttpService) {
  }
  ngOnInit(): void {
    this._httpService.getAll<any>('https://restcountries.eu/rest/v2/all').subscribe(
        data => {
            console.log('country data ', data);
        },
        error => {
            console.log('error', error); 
        }
    );
  }
}

