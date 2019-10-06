import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { Routes} from '@angular/router'; 
import { CreateEventsComponent } from './create-events/create-events.component';
import { C404Component } from './error/c404/c404.component';
import { EventGuard } from './event-details/event.guard';
import { EventListResolver } from './shared/event-list-resolver.service';
export const appRoutes : Routes=[
  {  path: 'events',
    component: EventsListComponent,
    resolve: {events: EventListResolver}
},
{  path: 'events/new',
    component: CreateEventsComponent,
    canDeactivate: ['canDeativateCreateEvent']
},
{  path: '404',
    component: C404Component
},
{
    path :'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventGuard]
},
{
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
},
{
    path: 'user',
    loadChildren: './user/user.module#UserModule'
}
]