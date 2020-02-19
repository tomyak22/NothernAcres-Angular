import { Component, OnInit } from '@angular/core';
import featureData from '../../assets/carouselFeatured.json';

@Component({
  selector: 'app-feature-carousel',
  templateUrl: './feature-carousel.component.html',
  styleUrls: ['./feature-carousel.component.css']
})
export class FeatureCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listingsFeatured: any = featureData

}
