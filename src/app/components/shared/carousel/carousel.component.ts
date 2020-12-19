import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [
  ]
})
export class CarouselComponent implements OnInit {

  images:any[] =  ['https://source.unsplash.com/random',
                    'https://source.unsplash.com/random',
                    'https://source.unsplash.com/random',
                    'https://source.unsplash.com/random'
                  ];

  constructor() { }

  ngOnInit(): void {
  }

}
