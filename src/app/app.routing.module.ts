import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      // { path: '', component: AppComponent },
      { path: '', component: HomeComponent },
      { path: 'Skills', component: SkillsComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'About', component: AboutComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
