import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path:'bindings', component: BindingComponent}, // Localhost:4200/binding
  {path:'directives', component: DirectivesComponent},
  {path: '**', component: BindingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent
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
