import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from "../shared/banner/banner.component";
import { AsideComponent } from '../shared/aside/aside.component';


@Component({
  selector: 'app-library',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, AsideComponent],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css', '../main-container.css']
})
export class LibraryComponent {
  isShow = false;
 
  toggleDisplay(): void{
    console.log("dziala");
    this.isShow = !this.isShow;
  }
}
// const form = document.querySelector('.form-container') as HTMLElement;
// let formCheck = false;
// function toggleForm(){
//   if(formCheck == false){
//     form.style.display = "flex";
//     formCheck = true
//   }else{
//     form.style.display = "none";
//     formCheck = false;
//   }
// }   