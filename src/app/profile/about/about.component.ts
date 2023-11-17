import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { RemoteProfileService } from '../remote-profile.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  about: any
  remoteAboutInfo: any = [];
  remoteURLInfo: any = [];
  cvUrl: any

  constructor(private profileService:ProfileService, public remoteProfileService: RemoteProfileService) { }
  
    ngOnInit() {
      // this.about1 =  this.profileService.about
      // this.about2 =  this.profileService.about2
      this.about = this.profileService.getAboutMeInfo();
      this.loadRemoteAboutInfo();

      this.cvUrl =  this.remoteProfileService.getRemoteDocURL().subscribe((data: {})=>{
        this.cvUrl = data;
        this.cvUrl = this.cvUrl[0].url;
      });
  
      this.loadRemoteURLs();
      this.loadRemoteAboutInfo();
    }

    loadRemoteAboutInfo() {
      return this.remoteProfileService.getRemoteAboutInfo().subscribe((data: {}) => {
        this.remoteAboutInfo = data;
      })
    }

    loadRemoteURLs() {
      return this.remoteProfileService.getRemoteURL().subscribe((data: {}) => {
        this.remoteURLInfo = data;
      })
    }
  
  }
