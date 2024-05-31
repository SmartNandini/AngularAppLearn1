import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyAppName';
  name = 'Nandini Jha';
  fruit = 'Orange';
  columnSpan: number = 2;
  bdr = "4px";
}
