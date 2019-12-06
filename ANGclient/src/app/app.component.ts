/* 
Imports
*/
  import { Component, OnInit } from '@angular/core';
  import { CrudService } from "./services/crud/crud.service";
//

/* 
Definition
*/
  @Component({
    selector: 'app-root',
    template: `
      <app-main-navigation></app-main-navigation>
      <router-outlet></router-outlet>
    `
  })
//

/* 
Export
*/
  export class AppComponent implements OnInit { 
    constructor( private CrudService: CrudService ){}
  
    private getUserInfos = () => {
      this.CrudService.readItem('auth')
      .then( apiResponse => {
        console.log(apiResponse)
      })
      .catch( apiResponse => {
        console.error(apiResponse)
      })
    }

    ngOnInit(){
      this.getUserInfos();
    }
  }
//