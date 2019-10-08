import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events-list/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventsComponent } from './create-events/create-events.component';
import { C404Component } from './error/c404/c404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './event-details/create-session/create-session.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventsComponent,
    C404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
{ provide :'canDeativateCreateEvent',
  useValue: checkDirtyState
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component : CreateEventsComponent){
if(component.isDirty)
return window.confirm('You have not saved this event, do you really want to cancel?');
return true;
}