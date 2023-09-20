import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TextInputAutocompleteModule } from "angular-text-input-autocomplete";
import { CustomMenuComponent } from "./custom-menu.component";
import {NgxTributeModule} from 'ngx-tribute';

@NgModule({
  imports: [BrowserModule, FormsModule, TextInputAutocompleteModule, NgxTributeModule],
  declarations: [AppComponent, CustomMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
