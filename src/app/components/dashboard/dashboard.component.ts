import { Component } from '@angular/core';
import { TownComponent } from "../town/town.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [TownComponent, RouterLink]
})
export class DashboardComponent {

}
