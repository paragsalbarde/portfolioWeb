import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { ProfileComponent } from './profile.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExtraCurricularComponent } from './extra-curricular/extra-curricular.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SkillsComponent } from './skills/skills.component';
import { ToolsComponent } from './tools/tools.component';
import { SplitPipe } from './split.pipe';
import { AboutComponent } from './about/about.component';
import { RemoteDataComponent } from './remote-data/remote-data.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    ExtraCurricularComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    PortfolioComponent,
    ProjectsComponent,
    ReferenceComponent,
    ScrollComponent,
    SkillsComponent,
    ToolsComponent,
    SplitPipe,
    AboutComponent,
    RemoteDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class ProfileModule { }
