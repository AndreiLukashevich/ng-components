import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PickersComponent } from "./pickers/pickers.component";
import { ModalWindowsComponent } from "./modal-windows/modal-windows.component";

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        { path: "home", component: HomeComponent },
        { path: "pickers", component: PickersComponent },
        { path: "modalwindows", component: ModalWindowsComponent }
    ])],
    exports: [RouterModule] 
})
export class AppRoutingModule { }