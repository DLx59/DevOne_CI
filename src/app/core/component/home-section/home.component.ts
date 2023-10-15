import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {GoogleService} from "../../services/google/google.service";
import {Reviews} from "../../models/reviews";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  reviews: Array<Reviews> = [];

  constructor(private googleService: GoogleService) {
  }

  ngOnInit() {
    this.googleService.getGoogleReviews('ChIJc6O1-M8lw0cRi9ibz0TdSWI').subscribe(r => this.reviews = r)
  }
}
