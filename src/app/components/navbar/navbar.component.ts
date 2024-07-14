import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { IsActiveMatchOptions, RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [DashboardComponent, RouterLink]
})
export class NavbarComponent {

    public linkActiveOptions: IsActiveMatchOptions ={
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact'
    }
}
