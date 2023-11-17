import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { RemoteProfileService } from '../remote-profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  workexp: any
  remoteExperienceInfo: any = [];

    constructor(private profileService:ProfileService, public remoteProfileService: RemoteProfileService) { }
  
      ngOnInit() {
          this.workexp =  this.profileService.getExperience()
          this.loadRemoteExperienceInfo();
      }

      loadRemoteExperienceInfo() {
        return this.remoteProfileService.getRemoteExperience().subscribe((data: {}) => {
          this.remoteExperienceInfo = data;
        })
      }
  }
