import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { AddMeetComponent } from './add-meet/add-meet.component';
import { ViewMeetComponent } from './view-meet/view-meet.component';
import { EditMeetComponent } from './edit-meet/edit-meet.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes:Routes=[
{path:'',redirectTo:'/viewClient',pathMatch:'full'},
{path:'viewClient',component:ViewClientComponent},
{path:'addClient',component:AddClientComponent},
{path:'editClient/:id',component:EditClientComponent},
{path:'viewMeet',component:ViewMeetComponent},
{path:'addMeet',component:AddMeetComponent},
{path:'editMeet/:id',component:EditMeetComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ViewClientComponent,
    EditClientComponent,
    AddMeetComponent,
    ViewMeetComponent,
    EditMeetComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
