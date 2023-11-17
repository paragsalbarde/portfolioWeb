import { Component, OnInit } from '@angular/core';
import { RemoteProfileService } from '../remote-profile.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {
  cvUrl: any
  remoteURLInfo: any = [];
  remoteAboutInfo: any = [];
  elCircle: any = [];
  degList: any = [];
  
  constructor(public remoteProfileService: RemoteProfileService) {}

  ngOnInit() {
    this.cvUrl =  this.remoteProfileService.getRemoteDocURL().subscribe((data: {})=>{
      this.cvUrl = data;
      this.cvUrl = this.cvUrl[0].url;
    });

    this.loadRemoteURLs();
    this.loadRemoteAboutInfo();
    this.irregularDivCircle();

    
  }

   loadRemoteURLs() {
    return this.remoteProfileService.getRemoteURL().subscribe((data: {}) => {
      this.remoteURLInfo = data;
    })
  }
  loadRemoteAboutInfo() {
    return this.remoteProfileService.getRemoteAboutInfo().subscribe((data: {}) => {
      this.remoteAboutInfo = data;
    })
  }


//START: Div Circle
irregularDivCircle () {
  setInterval(() =>  {
    this.elCircle = document.querySelector(".circle");
    this.degList = [];

    for (var i = 0; i < 8; i++) {
      this.degList.push(Math.floor(Math.random() * 50 + 50) + "%");
    }

    this.elCircle.style.borderRadius =
    this.degList[0] +
    this.degList[1] +
    this.degList[2] +
    this.degList[3] + " / " +
    this.degList[4] +
    this.degList[5] +
    this.degList[6] +
    this.degList[7];

    }, 1000)
  };


//END: Div Circle

}
