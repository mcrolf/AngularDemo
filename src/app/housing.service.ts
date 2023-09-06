import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  //url for assets
  //readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  // ngOnInit(): void {
  //   console.log('init');
  //   this.http.get(this.url);
  // }

  url = 'http://localhost:3000/locations'; //json web server
  
  //calls the web server to get housing locations
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    //console.log(data.json());
    return await data.json() ?? [];
  }
  
  //calls the web server to get the housing locations bu id
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
     const data = await fetch(`${this.url}/${id}`);
     return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Homes application recieved: first name: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  //default constructor
  constructor() { }
}