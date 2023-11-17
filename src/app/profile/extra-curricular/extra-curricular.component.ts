import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { RemoteProfileService } from '../remote-profile.service';


@Component({
  selector: 'app-extra-curricular',
  templateUrl: './extra-curricular.component.html',
  styleUrls: ['./extra-curricular.component.scss']
})

export class ExtraCurricularComponent implements OnInit {
  extras: any
  remoteExtraInfo: any = [];

  constructor(private profileService: ProfileService, public remoteProfileService: RemoteProfileService) { }
  
  ngOnInit() {
    this.extras = this.profileService.getExtraCircularInfo();
    this.loadRemotetExtraCurricularInfo();
  }

  loadRemotetExtraCurricularInfo() {
    return this.remoteProfileService.getRemoteExtraCircularInfo().subscribe((data: {}) => {
      this.remoteExtraInfo = data;
    })
  }
}
