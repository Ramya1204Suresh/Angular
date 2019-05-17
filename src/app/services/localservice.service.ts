import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalserviceService {
  myPI=3.14
  banks=['sbi','rbi','pnb']

  displaybank=function()
  {
    console.log(this.banks)
  }
  addbank()
  {
    this.banks.push('rbi')
  }

  constructor() { }
}
