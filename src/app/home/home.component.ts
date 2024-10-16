import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { BannerComponent } from "../shared/banner/banner.component";
import { AsideComponent } from '../shared/aside/aside.component';
import { RouterLink, RouterOutlet } from '@angular/router';

const albumsJson = `[
  {
      "Title": "Yeezus", 
      "Author": "Kanye West", 
      "Image": "/album_yeezus.jpeg",
      "Songs": []
  },
  {
      "Title": "Utopia", 
      "Author": "Travis Scott", 
      "Image": "/album_utopia.jpeg",
      "Songs": []
  },
  {
      "Title": "To Pimp a Buttefly", 
      "Author": "Kendrick Lamar", 
      "Image": "/album_tpab.jpeg",
      "Songs": []
  },
  {
      "Title": "LIVE.LONG.A$SAP", 
      "Author": "A$AP Rocky", 
      "Image": "/album_asap.jpeg",
      "Songs": []
  },
  {
      "Title": "Vultures 2", 
      "Author": "Kanye West", 
      "Image": "/album_vultures2.jpeg",
      "Songs": []
  },
  {
      "Title": "Graduation", 
      "Author": "Kanye West", 
      "Image": "/album_graduation.jpeg",
      "Songs": []
  },
  {
      "Title": "Opowieści z Doliny Smoków", 
      "Author": "Bedoes", 
      "Image": "/album_ozds.jpeg",
      "Songs": []
  },
  {
      "Title": "Mixtape Pluto", 
      "Author": "Future", 
      "Image": "/album_pluto.jpeg",
      "Songs": []
  }
]`;
const albumList = JSON.parse(albumsJson);


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './index.html',
  imports: [HeaderComponent, BannerComponent, AsideComponent, RouterLink,RouterOutlet],
  styleUrls: ['./home.component.css', '../main-container.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const trendingAlbums = document.querySelectorAll('.album-container .trending-album');
    if (trendingAlbums) {
      trendingAlbums.forEach((album, index) => {
        if (albumList[index]) {
          album.innerHTML = `
            <img src='${albumList[index].Image}' alt='${albumList[index].Title}'>
            <h3>${albumList[index].Title}</h3>
            <p>${albumList[index].Author}</p>
          `;
        } else {
          console.error(`Album not found at index ${index}`);
        }
      });
    } else {
      console.error('Trending albums not found.');
    }
  }
}
