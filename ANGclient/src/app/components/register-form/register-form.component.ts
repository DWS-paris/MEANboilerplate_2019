/* 
Imports & definition 
*/
import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';

// Gestion des formulaires
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
//

/* 
Export
*/
export class RegisterFormComponent implements OnInit, OnChanges {
  

  /* 
  Declaration
  */
    @Output() regirster = new EventEmitter();
    public form: FormGroup;
  //
  constructor( private FormBuilder: FormBuilder ) { }

  /* 
  Methods
  */
    private resetForm = () => {
      this.form = this.FormBuilder.group({
        email: [ undefined, Validators.required ],
        password: [ undefined, Validators.required ],
        repeatepassword: [ undefined, Validators.required ],
        firstname: [ undefined, Validators.required ],
        lastname: [ undefined, Validators.required ],
        birthdate: [ undefined, Validators.required ]
      });
    }
  //

  ngOnInit() {
    this.resetForm();
   }

  ngOnChanges(changes: any) {}
}
//