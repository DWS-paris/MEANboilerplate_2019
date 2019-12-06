/* 
Imports 
*/
  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable } from 'rxjs';
//

/* 
Expoort
*/
  @Injectable({
    providedIn: 'root'
  })
  export class ObservableServiceService {

    constructor() { }


    /* 
    Set observable empty object
    */
      protected loggedUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    //

    /*
    Function to set observable data has empty
    */
      public setEmptyDataObservable = ( type: String, data: any ) => {
        switch(type){
          case 'user':
            this.loggedUser.next(data)
            break;
          default:
            break;
        }
      }
    //

    /* 
    Observers functions
    */
      public getLoggedUser(): Observable<any> { return this.loggedUser }
    //
  }
//