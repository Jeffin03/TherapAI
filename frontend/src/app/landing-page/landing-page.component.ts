import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  // Declare instances of the sub components
  navbarComponent: NavbarComponent;
  introSectionComponent: IntroSectionComponent;

  constructor() {
    // Initialize the sub components
    this.navbarComponent = new NavbarComponent();
    this.introSectionComponent = new IntroSectionComponent();
  }
}