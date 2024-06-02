import { Component} from '@angular/core';
// import {ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentName1Component } from './component-name1/component-name1.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet, FormsModule,CommonModule],
  imports: [RouterOutlet, FormsModule, ComponentName1Component, ContactComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // encapsulation: ViewEncapsulation.Emulated, // Default, scoped to this component // // You can use Emulated, None, or ShadowDom
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
