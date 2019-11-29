/* 
Imports
*/
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { RegisterFormComponent } from "./register-form.component";

    // Gestion des formulaires
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//

/* 
Definition & export
*/
    @NgModule({
        declarations: [ RegisterFormComponent ],
        exports: [ RegisterFormComponent ],
        imports: [ 
            CommonModule, 
            FormsModule, 
            ReactiveFormsModule 
        ]
    })

    export class RegisterFormModule{};
//