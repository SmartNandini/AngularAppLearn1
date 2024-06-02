import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentName1Component } from './component-name1/component-name1.component';
import { ContactComponent } from './contact/contact.component';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, FormsModule,CommonModule],
  imports: [RouterOutlet, FormsModule, ComponentName1Component, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyAppName';
  name = 'Nandini Jha';
  fruit = 'Orange';
  columnSpan: number = 2;
  bdr = "4px";
  textColor='Blue';
  classesToApply: string = 'italicsClass boldClass';
  onClick() {
    console.log('Button clicked!');
  }
  color: string = '';
}
