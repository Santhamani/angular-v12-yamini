import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, HeaderComponent,FooterComponent ,ContactComponent,SkillsComponent,AboutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
