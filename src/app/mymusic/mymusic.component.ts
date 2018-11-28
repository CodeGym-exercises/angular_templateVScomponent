import { Component, OnInit } from '@angular/core';
import { MusicService} from '../mymusic.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-mymusic',
  templateUrl: './mymusic.component.html',
  styleUrls: ['./mymusic.component.css']
})
export class MymusicComponent implements OnInit {
  url:SafeResourceUrl;
  constructor(private mymusicService: MusicService,
    private domSanitizer: DomSanitizer ) { }
  song = new Song();
  
  ngOnInit() {
  }

  setSong(id,name){
    console.log('id->'+ id+'\nname->'+name);
    this.song.id = id;
    this.song.name = name;
    this.setUrl()
  }

  getSong(){
    return this.song;
  }
  
  setUrl() {
    const _url = 'https://www.youtube.com/embed/' + this.song.id;
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(_url);
  }
}

class Song {
  id: string;
  name: string;
  constructor() {
    this.id = '';
    this.name = '';
  }
}
