import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './user.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, HomeComponent, FooterComponent,UserComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
