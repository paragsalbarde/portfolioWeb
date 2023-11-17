import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { RemoteProfileService } from '../remote-profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any = [];
  remoteProjects: any = [];
  data: any;
  constructor(private profileService:ProfileService, public remoteProfileService: RemoteProfileService) { }

  ngOnInit() {
    // this.projects = this.profileService.getProjects()
    // console.log(this.projects)
    this.loadProjects();
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event: any){
    this.config.currentPage = event;
  }

  // Issues list
  loadProjects() {
    return this.remoteProfileService.getRemoteProjects().subscribe((data: {}) => {
      this.remoteProjects = data;
    })
  }
}
