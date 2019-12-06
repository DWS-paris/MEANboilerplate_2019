/* 
Imports
*/
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { LoginFormComponent } from "./login-form.component";

    // Gestion des formulaires
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//

/* 
Definition & export
*/
    @NgModule({
        declarations: [ LoginFormComponent ],
        exports: [ LoginFormComponent ],
        imports: [ 
            CommonModule, 
            FormsModule, 
            ReactiveFormsModule 
        ]
    })

    export class LoginFormModule{};
//