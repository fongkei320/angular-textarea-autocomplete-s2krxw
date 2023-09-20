import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TextInputAutocompleteModule } from "angular-text-input-autocomplete";
import { CustomMenuComponent } from "./custom-menu.component";

@NgModule({
  imports: [BrowserModule, FormsModule, TextInputAutocompleteModule],
  declarations: [AppComponent, CustomMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
