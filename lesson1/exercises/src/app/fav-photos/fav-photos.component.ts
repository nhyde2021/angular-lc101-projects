import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Oh Yeah! Here's some doggos";
  image1 = 'https://data.whicdn.com/images/322296552/original.jpg';
  image2 = 'https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg';
  image3 = 'https://townsquare.media/site/204/files/2021/04/dog-the-bounty-hunter-racist-homophobic.jpg';

  constructor() { }

  ngOnInit() {
  }

}