import { Component, OnInit } from '@angular/core';
import { RemoteProfileService } from '../remote-profile.service';

@Component({
  selector: 'app-remote-data',
  templateUrl: './remote-data.component.html',
  styleUrls: ['./remote-data.component.scss']
})
export class RemoteDataComponent implements OnInit {
  remoteProjects: any = [];
  remoteAboutInfo: any = [];

  ngOnInit() {
    this.loadProjects();
    this.loadRemoteAboutInfo()
    // console.log(this.remoteProjects);
  }

  constructor(public remoteProfileService: RemoteProfileService) {  }

  // Issues list
  loadProjects() {
    return this.remoteProfileService.getRemoteProjects().subscribe((data: {}) => {
      this.remoteProjects = data;
    })
  }

  loadRemoteAboutInfo() {
    return this.remoteProfileService.getRemoteAboutInfo().subscribe((data: {}) => {
      this.remoteAboutInfo = data;
    })
  }

}
