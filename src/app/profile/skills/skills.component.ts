import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { RemoteProfileService } from '../remote-profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  //skills: any;
  allSkills: any = [];
  designSkills: any = []
  designTools: any = []
  uiDevSkills: any = []

  constructor(private profileService:ProfileService, public remoteProfileService: RemoteProfileService) { }

    ngOnInit() {
      this.loadDesignSkills();
      this.loadDesignTools();
      this.loadUiDevSkills()
    }

    loadDesignSkills() {
      return this.remoteProfileService.getRemoteSkills().subscribe((skills) => {
        this.allSkills = skills;
        this.designSkills = [...this.allSkills];
        console.log(this.allSkills);
        this.designSkills = [...this.designSkills.filter((skillType: any) => skillType.type === 'Design')]
        console.log("Design Skills: ", this.designSkills);
      })
    }

    loadDesignTools() {
      return this.remoteProfileService.getRemoteSkills().subscribe((skills) => {
        this.allSkills = skills;
        this.designTools = [...this.allSkills];
        this.designTools = [...this.designTools.filter((skillType: any) => skillType.type === 'Tool')]
        console.log("Design Tools: ", this.designTools);
      })
    }

    loadUiDevSkills() {
      return this.remoteProfileService.getRemoteSkills().subscribe((skills) => {
        this.allSkills = skills;
        this.uiDevSkills = [...this.allSkills];
        this.uiDevSkills = [...this.uiDevSkills.filter((skillType: any) => skillType.type === 'uiDev')]
        console.log("UI Dev Skills: ", this.uiDevSkills);
      })
    }
    
    


  }