import { Component, OnInit } from '@angular/core';
import { ObservableService } from "../../services/obervable/observable-service.service";
import { CrudService } from "../../services/crud/crud.service";

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html'
})
export class MainNavigationComponent implements OnInit {

  /* 
  Declaratioon
  */
    public userData: any;
    public userIsLogged: Boolean;
  //

  constructor( private ObservableService: ObservableService, private CrudService: CrudService ) { }

  ngOnInit() {
    // Get user data observer
    this.ObservableService.getLoggedUser().subscribe( async loggedUSerObserver => {
      // Check if user is logged
      if( loggedUSerObserver === null ){
        this.userIsLogged = false;
        console.log({loggedUSerObserver, userIsLogged: this.userIsLogged})

        // Try to get user data fromo token
        await this.CrudService.readItem('auth')
      }
      else{
        this.userIsLogged = true;
        console.log({loggedUSerObserver, userIsLogged: this.userIsLogged})
      }
    })
  }

}
