/* 
Imports
*/
    // Angular
    import { NgModule} from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Components
    import { RegisterPageComponent } from "./register-page.component";
    import { Routing } from "./router";
    import { RegisterFormModule } from "../../components/register-form/module";
//

/* 
Definition
*/
    @NgModule({
        declarations: [ RegisterPageComponent ],
        imports: [ CommonModule, Routing, RegisterFormModule ]
    })
//

/* 
Export
*/
    export class Module{};
//