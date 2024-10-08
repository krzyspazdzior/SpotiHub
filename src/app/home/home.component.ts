import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from "../shared/banner/banner.component";
import { AsideComponent } from '../shared/aside/aside.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './index.html',
  imports: [HeaderComponent, BannerComponent, AsideComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {

}