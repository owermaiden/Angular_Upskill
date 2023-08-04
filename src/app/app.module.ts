import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { ParentComponent } from './xcomm/parent/parent.component';
import { ChildComponent } from './xcomm/child/child.component';
import { DetailsComponent } from './interComm/details/details.component';
import { LikeComponent } from './interComm/like/like.component';

const routes: Routes =[
  {path:'bindings', component: BindingComponent}, // Localhost:4200/binding
  {path:'directives', component: DirectivesComponent},
  {path: "routing/:productid", component: RoutingComponent},
  {path: "xcomm", component: ParentComponent},
  {path: "intercomm", component: DetailsComponent},
  {path: "likeComm", component: LikeComponent},
  {path: '**', component: BindingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    RoutingComponent,
    ParentComponent,
    ChildComponent,
    DetailsComponent,
    LikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
