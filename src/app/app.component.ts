import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { single } from 'rxjs';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  message: string = '';
  createPlaylist(playlistName: string){
    const newPlaylistId = userPlaylists.length > 0 
      ? Math.max(...userPlaylists.map(p => p.id)) + 1 : 1
    userPlaylists.push(new PlaylistInfo(newPlaylistId, playlistName, []));
    const messageElement = document.getElementById("message");
    this.message = `${playlistName} has been created in your library!`;
  }
}
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

let allSongs: Song[] = []

const AutoSongId = allSongs.length > 0 
? Math.max(...allSongs.map(p => p.id)) + 1 : 1;

function createSong(songTitle: string, songArtist: string, songReleaseType:releaseType, album: Album | null): void{
  const newSongId = allSongs.length > 0 
  ? Math.max(...allSongs.map(s => s.id)) + 1 : 1
  const albumId = album ? album.id : null;
  const newSong: Song = new SongInfo(newSongId, songTitle, songArtist, songReleaseType, albumId);
  allSongs.push(newSong);
  if(songReleaseType === "album" && album){
    album.tracklist.push(newSong)
  }
}

function listSongs(): void {
  console.log("Available songs:");
  allSongs.forEach((song) => {
    console.log(`${song.id}. ${song.title}
    By: ${song.artist}`);
  });
}

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

interface Album{
  id: number,
  title: string,
  tracklist: Song[];
}

class AlbumInfo{
  id: number;
  title: string;
  tracklist: Song[];

  constructor(id: number, title:string,tracklist:Song[]){
    this.id = id;
    this.title = title;
    this.tracklist = tracklist;
  }
}

const allAlbums: Album[] = []

function createAlbum(albumTitle: string): Album{
  const newAlbumId = allAlbums.length > 0 
    ? Math.max(...allAlbums.map(p => p.id)) + 1 : 1;
  
  const newAlbum = new AlbumInfo(newAlbumId, albumTitle, [])
  allAlbums.push(newAlbum);
  console.log(`Album ${albumTitle} has been created`);
  return newAlbum;
}


let userPlaylists: Playlist[] = [];


function deletePlaylist(playlistName: string): void{
  const playlistIndex = userPlaylists.findIndex(p => p.name === playlistName)
  if(playlistIndex === -1){
    console.log(`${playlistName} not found`);
    return;
  }
    console.log(`${playlistName} has been deleted from your library`);
    userPlaylists.splice(playlistIndex, 1);
}

function addToPlaylist(playlistName: string, songTitle: string): void{
  const chosenPlaylist = userPlaylists.find(p => p.name === playlistName)
  const chosenSongAdd = allSongs.find(s => s.title === songTitle)
  if (!chosenSongAdd) {
    console.log(`Song ${songTitle} not found`);
    return;
  }
  if(!chosenPlaylist){
    console.log(`Song ${playlistName} not found`);
    return;
  }
  chosenPlaylist.songs.push(chosenSongAdd);
    console.log(`${chosenSongAdd.title} added to ${playlistName}`);

}
function deleteFromPlaylist(playlistName: string, songTitle: string): void{
  const chosenPlaylist = userPlaylists.find(p => p.name === playlistName)
  const chosenSong = allSongs.find(s => s.title === songTitle)
  if (!chosenPlaylist) {
    console.log(`Playlist ${playlistName} not found.`);
    return;
  }
  const songIndex = chosenPlaylist.songs.findIndex(s => s.title === songTitle);
  if (songIndex === -1) {
    console.log(`Song ${songTitle} not found`);
    return;
  }
  chosenPlaylist.songs.splice(songIndex, 1);
  console.log(`${songTitle} has been deleted from ${playlistName}`);
}


// listSongs();





const newAlbum1 = createAlbum("Yeezus");
const newAlbum2 = createAlbum("Graduation");
createSong("On Sight", "Kanye West", "album", newAlbum1);
createSong("Dzwonią Dziwki", "Waima", "single", null);
console.log(allAlbums);

// Music player
console.log("=================Music player==================");
