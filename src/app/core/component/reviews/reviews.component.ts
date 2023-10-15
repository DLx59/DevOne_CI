import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Reviews} from "../../models/reviews";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsComponent {
  @Input() reviews: Array<Reviews> = []
  public reviewIndex = 0;

  sub() {
    if (this.reviewIndex <= 0)
      this.reviewIndex = this.reviews.length - 1
    else
      this.reviewIndex--
  }

  add() {
    if (this.reviewIndex >= this.reviews.length - 1)
      this.reviewIndex = 0;
    else
      this.reviewIndex++
  }
}
