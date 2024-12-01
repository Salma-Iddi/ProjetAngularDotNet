import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {
  imageIndex = 0;
  images = ['image1.jpg', 'img3.jpg', 'img1.jpg', 'img2.jpg']; 
  private intervalSubscription: any;

  ngOnInit() {
    this.intervalSubscription = interval(1000) 
      .pipe(takeWhile(() => this.shouldComponentBeActive))
      .subscribe(() => {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
      });
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }

  shouldComponentBeActive = true;

  getImageUrl(): string {
    return `assets/${this.images[this.imageIndex]}`;
  }
}