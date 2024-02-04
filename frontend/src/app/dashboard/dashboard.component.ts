import { Component } from '@angular/core';
import { TopbarComponent } from "./topbar/topbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ContentViewComponent } from "./content-view/content-view.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [TopbarComponent, SidebarComponent, ContentViewComponent]
})
export class DashboardComponent {

}
