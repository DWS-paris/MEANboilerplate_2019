/* 
Imports
*/
    // Angular
    import { NgModule} from "@angular/core";
    import { CommonModule } from "@angular/common";

    // Components
    import { HomePageComponent } from "./home-page.component";
    import { Routing } from "./router";
    import { PostModule } from "../../components/post/module";
    import { LoginFormModule } from "../../components/login-form/module";
//

/* 
Definition
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        imports: [ CommonModule, Routing, PostModule, LoginFormModule ]
    })
//

/* 
Export
*/
    export class Module{};
//