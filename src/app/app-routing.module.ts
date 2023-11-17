import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './profile/about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { IntroComponent } from './profile/intro/intro.component';
import { ContactComponent } from './profile/contact/contact.component';
const routes: Routes = [
  {path: 'aboutme' , component: AboutComponent},
  {path: 'home' , component: ProfileComponent},
  {path: 'contact' , component: ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
