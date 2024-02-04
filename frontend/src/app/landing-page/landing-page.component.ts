import { Component } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: []
})
export class LandingPageComponent {
    title = 'TherapAI Assistant';
    constructor() {}  
  }
