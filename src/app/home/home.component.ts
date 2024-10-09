import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from "../shared/banner/banner.component";
import { AsideComponent } from '../shared/aside/aside.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './index.html',
  imports: [HeaderComponent, BannerComponent, AsideComponent, RouterLink,RouterOutlet],
  styleUrls: ['./home.component.css', '../main-container.css']
})
export class HomeComponent {

}