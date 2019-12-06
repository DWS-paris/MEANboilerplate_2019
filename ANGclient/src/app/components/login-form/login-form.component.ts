/* 
Imports & definition 
*/
import { Component, OnInit, OnChanges, Output, Input, EventEmitter, ComponentFactoryResolver } from '@angular/core';

// Gestion des formulaires
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from "../../services/crud/crud.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
//

/* 
Export
*/
export class LoginFormComponent implements OnInit, OnChanges {
  

  /* 
  Declaration
  */
    @Output() register = new EventEmitter();
    public form: FormGroup;
  //
    constructor( private FormBuilder: FormBuilder, private CrudService: CrudService ) { }

  /* 
  Methods
  */
    private resetForm = () => {
      this.form = this.FormBuilder.group({
        email: [ undefined, Validators.required ],
        password: [ undefined, Validators.required ]
      });
    }

    public submitForm = () => {
      // User the CRUD service to log user
      this.CrudService.createItem('auth/login', this.form.value)
      .then( apiResponse => {
        console.log(apiResponse)
      })
      .catch( apiResponse => {
        console.error(apiResponse)
      })
    }
  //

  ngOnInit() {
    this.resetForm();
   }

  ngOnChanges(changes: any) {}
}
//
