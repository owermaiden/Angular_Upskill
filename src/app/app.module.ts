import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { ParentComponent } from './xcomm/parent/parent.component';
import { ChildComponent } from './xcomm/child/child.component';
import { DetailComponent } from './interComm/details/details.component';
import { ListComponent } from './interComm/like/like.component';
import { HttpClientModule } from '@angular/common/http';
import { TdFormsComponent } from './forms/td-forms/td-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes =[
  {path:'bindings', component: BindingComponent}, // Localhost:4200/binding
  {path:'directives', component: DirectivesComponent},
  {path: "routing/:productid", component: RoutingComponent},
  {path: "xcomm", component: ParentComponent},
  {path: "intercomm", component: DetailComponent},
  {path: "listComm", component: ListComponent},
  {path: "tdform", component: TdFormsComponent},
  {path: "rxform", component: ReactiveFormsComponent},
  {path: "rxjs", component: RxjsComponent},
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
    DetailComponent,
    ListComponent,
    TdFormsComponent,
    ReactiveFormsComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
