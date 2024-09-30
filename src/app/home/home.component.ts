import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeaderComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {

}