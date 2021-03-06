import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PickersComponent } from "./pickers/pickers.component";
import { ModalWindowsComponent } from "./modal-windows/modal-windows.component";
import { AutocompleteComponent, } from './autocomplete/autocomplete.component';
import { PrimengComponent, } from './primeng/primeng.component';
import { DurationComponent } from './duration/duration.component';
import { NgxComponent } from './ngx/ngx.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        { path: "home", component: HomeComponent },
        { path: "pickers", component: PickersComponent },
        { path: "modalwindows", component: ModalWindowsComponent },
        { path: "autocomplete", component: AutocompleteComponent },
        { path: "primeng", component: PrimengComponent },
        { path: "duration", component: DurationComponent },
        { path: "ngx", component: NgxComponent }
    ])],
    exports: [RouterModule] 
})
export class AppRoutingModule { }