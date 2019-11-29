import { Component, OnInit } from '@angular/core';
import { CrudService } from "../../services/crud/crud.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent implements OnInit {

  constructor(
    private CrudService: CrudService
  ) { }

  public registerUser = (event) => {
    this.CrudService.createItem('auth/register', event)
    .then( apiResponse => {
      console.log(apiResponse)
    })
    .catch( apiResponse => {
      console.error(apiResponse)
    })
  }

  ngOnInit() {
  }

}
