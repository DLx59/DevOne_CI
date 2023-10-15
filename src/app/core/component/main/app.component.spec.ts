import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NavbarComponent} from "../navbar/navbar.component";
import {HeroComponent} from "../home-section/hero/hero.component";
import {RouterTestingModule} from "@angular/router/testing";
import {FooterComponent} from "../footer/footer.component";
import {ServiceBlockComponent} from "../home-section/service-block/service-block.component";
import {ReviewsComponent} from "../reviews/reviews.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        HeroComponent,
        FooterComponent,
        ServiceBlockComponent,
        ReviewsComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([]),
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the appComponent', () => {
    expect(fixture).toBeTruthy();
  });
});
