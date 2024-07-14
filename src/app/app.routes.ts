import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SalleComponent } from './components/salle/salle.component';
import { CategoryComponent } from './components/category/category.component';
import { PlaceComponent } from './components/place/place.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TownComponent } from './components/town/town.component';
import { ProjectionMovieComponent } from './components/projection-movie/projection-movie.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRoleComponent } from './components/user-role/user-role.component';

export const routes: Routes = [
    {path: "", redirectTo: "/dashboard", pathMatch: 'full'},
    {path: "dashboard", component: DashboardComponent},
    {path: "town", component: TownComponent},
    {path: "movie", component: MoviesComponent},
    {path: "salle", component: SalleComponent},
    {path: "category", component: CategoryComponent},
    {path: "place", component: PlaceComponent},
    {path: "ticket", component: TicketsComponent},
    {path: "projectionMovie", component: ProjectionMovieComponent},
    {path: "cinema", component: CinemaComponent},
    {path: "user/:id", component: UserComponent, children:[
        {path: "profile", component: UserProfileComponent},
        {path: "role", component: UserRoleComponent}
    ]}
];
