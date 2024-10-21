import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterOutlet, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
  })
  export class HeaderComponent {
    isShowMenu = false;
    toggleMenuDisplay(): void{
      const arrow = document.querySelector('header .user-box i') as HTMLElement;
      this.isShowMenu = !this.isShowMenu;

      arrow.style.transition = '0.3s all';

      if(this.isShowMenu == true){
        arrow.style.transform = 'rotate(180deg)';
        
      }else{
        arrow.style.transform = 'rotate(0deg)';
        
      }


    }
  }