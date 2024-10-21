import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { AsideComponent } from '../shared/aside/aside.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



interface Playlist{
  id: number,
  name: string;
  songs: Song[];
}
class PlaylistInfo{
  id: number;
  name: string;
  songs: Song[];
  
  constructor(id: number, name: string, songs: Song[]){
    this.id = id;
    this.name = name;
    this.songs = songs;
  }
}
let userPlaylists: Playlist[] = [];
let allSongs: Song[] = []


type releaseType = "album" | "single" | "EP";
interface Song{
  id: number,
  title: string,
  artist: string,
  releaseType: releaseType,
  album: number | null;
}
class SongInfo{
  id: number;
  title: string;
  artist: string;
  releaseType: releaseType;
  album: number | null;
  
  
  constructor(id: number, title: string, artist: string, releaseType: releaseType, album: number | null) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.releaseType = releaseType;
    this.album = album;
  }
}

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [HeaderComponent, AsideComponent, ReactiveFormsModule],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css', '../main-container.css']
})

export class LibraryComponent {

  // form display

  isShowForm = false;
 
  toggleFormDisplay(): void{
    this.isShowForm = !this.isShowForm;
  }

  //form functionality

  playlistForm = new FormGroup({
    imageFile: new FormControl(null),
    playlistName: new FormControl('New Playlist', Validators.required)
  })



  //creating playlist
  
  message: string = '';

  createPlaylist(){

    const emptyMessage = document.querySelectorAll('.empty-message');
    if(emptyMessage){
      emptyMessage.forEach((elem) => (
        (elem as HTMLElement).style.display = "none"
      ))
    };
    

    let playlistName = this.playlistForm.value.playlistName ?? '';
    let imageFile = this.playlistForm.value.imageFile ?? null;


    const newPlaylistId = userPlaylists.length > 0 
    ? Math.max(...userPlaylists.map(p => p.id)) + 1 : 1
    userPlaylists.push(new PlaylistInfo(newPlaylistId, playlistName, []));

    const playlistContainer = document.createElement('div');
    playlistContainer.classList.add('library-item');
    const playlistNumber = document.createElement('div');
    playlistNumber.classList.add('item-number');
    const playlistOptions = document.createElement('div');
    playlistOptions.classList.add('item-options');

    //image default
    let imageUrl = '/empty_playlist.png'; 
    if (imageFile) {
      imageUrl = URL.createObjectURL(imageFile);
    }

  // Set inner HTML for the new playlist




    playlistNumber.innerHTML = `${newPlaylistId}.`;
    playlistOptions.innerHTML = `•••`

  playlistContainer.innerHTML = `
    <img src="${imageUrl}" alt="">
    <div class="item-info">
      <h3>${playlistName}</h3>
      <p>Playlist • User</p>
    </div>
  `;

  // Find the container where the playlists will be added
  const libraryArea = document.querySelector('.library-area');
  if (libraryArea) {
    libraryArea.appendChild(playlistNumber);
    libraryArea.appendChild(playlistContainer);
    libraryArea.appendChild(playlistOptions);
  }
    const messageElement = document.getElementById("message");
    this.message = `${playlistName} has been created in your library!`;
    if (messageElement) {
      messageElement.style.display = "flex"
      messageElement.style.transition = "none";
      messageElement.style.opacity = "1";
      messageElement.innerText = this.message;
      void messageElement.offsetWidth; 
      messageElement.style.transition = "2.5s opacity";
      setTimeout(() => {messageElement.style.opacity = "0";}, 1000)
      setTimeout(() =>{messageElement.innerText = ""}, 4000)
      setTimeout(() =>{messageElement.style.display = "none"}, 4000)
    }
    this.playlistForm.reset();
  }
  
  

}