/* 
Imports & definition 
*/
  // Imports
  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

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
      ){}
    //


    /* 
    Auth strategy
    Parameters are used to define specific methods (if needed)
    */
      canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise( (resolve, reject) => {
          
        })
      }
    //
  }
//