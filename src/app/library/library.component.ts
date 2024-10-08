import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from "../shared/banner/banner.component";
import { AsideComponent } from '../shared/aside/aside.component';


@Component({
  selector: 'app-library',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, AsideComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {

}
