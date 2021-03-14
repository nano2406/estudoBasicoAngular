import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/Error404/Error404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    exports: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Component
            }
        ])
    ]
})
export class CoreModule {

}