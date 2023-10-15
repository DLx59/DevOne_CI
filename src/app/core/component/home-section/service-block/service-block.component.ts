import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-block',
  templateUrl: './service-block.component.html',
  styleUrls: ['./service-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServiceBlockComponent {
  @Input() imgSrc: string = '';
  @Input() imgHeight: string = '';
  @Input() imgWidth: string = '';
  @Input() img_alt: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() routerLink: string = '';

  constructor(public router: Router) {
  }

  public goto(routerLink: string) {
    this.router.navigate([routerLink]);
  }
}
