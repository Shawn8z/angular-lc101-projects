import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie shoots';
  image1 = 'https://cdn.onebauer.media/one/empire-tmdb/films/157336/images/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill';
  image2 = 'https://fatimaaltaf.files.wordpress.com/2017/09/interstellar_7.jpg';
  image3 = 'https://cdn.europosters.eu/image/750/posters/interstellar-go-further-i23316.jpg';
  constructor() { }

  ngOnInit() {
  }

}