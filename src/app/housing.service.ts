import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: "root"
})

export class HousingService {

  url = "http://localhost:3000/locations"; //json web server
  
  //calls the web server to get housing locations
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch("http://localhost:3000/locations");
    let buf = await data.json();
    console.log("All Locations" + buf);
    return buf ?? [];
  }
  
  //calls the web server to get the housing locations bu id
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
     const data = await fetch(`${this.url}/${id}`);
     var buf = await data.json();
     console.log("Location by id" + buf);
     return buf ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Homes application recieved: first name: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  //default constructor
  //constructor() { }
}