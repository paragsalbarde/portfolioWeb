import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProfileService } from './profile/profile.service';
import { RemoteProfileService } from './profile/remote-profile.service';

import { HeaderComponent } from './profile/header/header.component';
import { NavComponent } from './nav/nav.component';
import { environment } from '../environments/environment';
import {firebase} from '../environments/firebase';
import { FirebaseOptionsToken } from 'angularfire2';

const routes: Routes = [
  {    path: '', component: ProfileComponent  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    ProfileModule,
    HttpClientModule
  ],
  providers: [ProfileService, RemoteProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
