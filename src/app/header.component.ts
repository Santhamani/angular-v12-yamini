import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="user">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="hello">hello</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>`,
  styleUrls: ['./app.component.css'],
})
export class HeaderComponent {
  public title = HeaderComponent;
}
