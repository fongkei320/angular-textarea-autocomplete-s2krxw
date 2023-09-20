import { Component } from '@angular/core';
import { TextInputAutocompleteMenuComponent } from 'angular-text-input-autocomplete';

@Component({
  template: `
    I'm a custom menu template!
    <ul
      *ngIf="choices?.length > 0"
      #dropdownMenu
      class="dropdown-menu"
      [style.top.px]="position?.top"
      [style.left.px]="position?.left"
    >
      <li
        *ngFor="let choice of choices; trackBy: trackById"
        [class.active]="activeChoice === choice"
      >
        <a href="javascript:;" (click)="select(choice)">
          {{ choice }}
        </a>
      </li>
    </ul>
  `,
})
export class CustomMenuComponent extends TextInputAutocompleteMenuComponent {
  isSecondLayer = false;
  value = '';
  onArrowDown() {
    console.log(this.searchText);
  }
  select(choice) {
    if (!this.isSecondLayer) {
      this.isSecondLayer = true;
      this.value = choice;
      this.choices = ['2layer2-1', '2layer2-2', '2layer2-3'];
    } else {
      this.value = `${this.value}.${choice}`;
      this.selectChoice.next(this.value);
      this.value = '';
      this.isSecondLayer = false;
    }
  }
  //
}
