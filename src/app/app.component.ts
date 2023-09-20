import { Component, VERSION, ViewChildren } from '@angular/core';
import { CustomMenuComponent } from './custom-menu.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  trig = '#';
  menuComponent = CustomMenuComponent;
  formControlValue = '';
  value = '';
  trigFunc(event: KeyboardEvent): boolean {
    return event.shiftKey && event.ctrlKey && event.key === '?';
  }

  async findChoices(searchText: string) {
    //const words = searchText.split('.');
    //const isSecondLayer = words.length > 1;
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    //await delay(1000);
    const layer1 = ['1layer1-1', '2layer1-2', '3layer1-3'];

    let result = layer1.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
    return result;
  }

  getChoiceLabel(choice: string) {
    return `${choice}`;
  }
}
