/* 
Imports & definition 
*/
  // Imports
  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
  import { CrudService } from "./services/crud/crud.service";

  // Definition
  @Injectable({
    providedIn: 'root'
  })
//


/* 
Export
*/
  export class AuthGuard implements CanActivate {
    /* 
    Properties
    */
      constructor( 
        private Router: Router,
        private CrudService: CrudService
      ){}
    //


    /* 
    Auth strategy
    Parameters are used to define specific methods (if needed)
    */
      canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise( (resolve, reject) => {
            // Use the service to get user infor from token
            this.CrudService.readItem('auth')
            .then( apiResponse => resolve(true) )
            .catch( apiResponse =>  this.Router.navigateByUrl('/'))
        })
      }
    //
  }
//