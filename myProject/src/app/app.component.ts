import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import   
 { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import   
 { Router } from '@angular/router';
 import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector:   
 'app-root',
  standalone: true,
  imports: [MatToolbarModule,
    RouterOutlet,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) {}
  sidenavOpened = true;

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
  goToRegister()   
 {
    this.router.navigate(["/register"]);
  }goToDashboard()   
  {
     this.router.navigate(["/dashboard"]);
   }

  goToLogin() {
    this.router.navigate(["/login"]);
  }
  goToHomepage() {
    this.router.navigate([""]);
  }

  goToFrai() {
    this.router.navigate(["/frai"]);
  }

  title = 'myProject';
}