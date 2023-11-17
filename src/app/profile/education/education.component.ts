import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { RemoteProfileService } from '../remote-profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent implements OnInit {

  education :  any;
  remoteEducation: any = [];


  constructor(private profileService:ProfileService, public remoteProfileService: RemoteProfileService) { }

  ngOnInit() {
    this.education = this.profileService.getEducationInfo();
    this.loadRemoteEducation();
  }

  loadRemoteEducation() {
    return this.remoteProfileService.getRemoteEducation().subscribe((data: {}) => {
      this.remoteEducation = data;
    })
  }

}