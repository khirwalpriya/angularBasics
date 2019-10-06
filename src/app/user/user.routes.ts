import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login/login.component';

export const userRoutes =[
    {path:'profile', component: ProfileComponent},
    // the path will be /user/profiles not just profiles
    {path:'login', component: LoginComponent}
]