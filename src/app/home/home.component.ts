import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BannerComponent } from "../shared/banner/banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeaderComponent, FooterComponent, BannerComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {

}