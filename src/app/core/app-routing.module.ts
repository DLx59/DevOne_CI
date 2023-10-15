import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./component/contact/contact.component";
import {HomeComponent} from "./component/home-section/home.component";
import {WebsiteCreationComponent} from "./component/service-section/website-creation/website-creation.component";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'creation-site-internet', component: WebsiteCreationComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
