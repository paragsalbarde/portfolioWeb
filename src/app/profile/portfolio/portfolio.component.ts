import { Component, OnInit } from '@angular/core';
import { RemoteProfileService } from '../remote-profile.service';
import { PortfolioInterface } from '../../../assets/shared/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  config: any;
  remotePortfolios: any = [];
  portfolioId: any;
  singlePortfolio: any = [];
  public myArr: any = [];
  // allPortfolios: PortfolioInterface[];

  constructor(public remoteProfileService: RemoteProfileService) { }

  ngOnInit() {
    
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.remotePortfolios.length
    };
    this.loadProjects();
  }


  pageChanged(event: any){
    this.config.currentPage = event;
  }

  // Load list of Projects
  loadProjects() {
    return this.remoteProfileService.getRemoteProjects().subscribe((data: {}) => {
      this.remotePortfolios = data;
    })
  }

 // Load Clicked Project
  loadProject(id: number) {
    this.singlePortfolio = this.remoteProfileService.getRemoteProject(id).subscribe((data: {}) => {
      this.singlePortfolio = data;
      console.log("Project in loadProject : ", this.singlePortfolio)
    })
  }
  
  displayStyle = "none";
  
  openPopup(id : number) {
    //this.portfolioId = id;
    this.displayStyle = "block";
    console.log("Project ID is ", id)
    this.loadProject(id)
    
    return this.remoteProfileService.getRemoteProject(id).subscribe(data => {
      this.singlePortfolio = data;
      
      for( let i in this.singlePortfolio) {   //Pay attention to the 'in'
        console.log(this.singlePortfolio[i]);
        this.myArr.push(this.singlePortfolio[i]);
      }
      console.log("Project in this.myArr : ", this.myArr)
      console.log("Project in this.singlePortfolio : ", this.singlePortfolio)
    })
    
    
  }
  closePopup() {
    this.displayStyle = "none";
  }
  

}