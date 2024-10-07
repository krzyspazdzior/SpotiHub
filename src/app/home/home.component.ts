import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from "../shared/banner/banner/banner.component";
import { AsideComponent } from '../shared/aside/aside/aside.component';


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [HeaderComponent, BannerComponent, AsideComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {

}