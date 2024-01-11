import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MyCompComponent} from './my-comp/my-comp.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
 
  standalone: true,
  imports: [CommonModule, RouterOutlet,MyCompComponent,MatSlideToggleModule],
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
 
  
  
}
