import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-temp-list',
  templateUrl: './temp-list.component.html',
  styleUrls: ['./temp-list.component.css']
})
export class TempListComponent implements OnInit {

  Temp: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadTemp()
  }


  loadTemp() {
    return this.restApi.getTemp().subscribe((data: {}) => {
      this.Temp = data;
    })
  }
  
}