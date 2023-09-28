import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstProjectComponent } from './components/first-project/first-project.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { ParentDataTesteComponent } from './components/parent-data-teste/parent-data-teste.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { RenderifTesteComponent } from './components/renderif-teste/renderif-teste.component';
import { TesteEventsComponent } from './components/teste-events/teste-events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { SecondChangeEmmiterComponent } from './components/second-change-emmiter/second-change-emmiter.component';
import { FatherChangeEmmiterComponent } from './components/father-change-emmiter/father-change-emmiter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    FirstProjectComponent,
    ParentDataComponent,
    ParentDataTesteComponent,
    DirectivesComponent,
    RenderifTesteComponent,
    TesteEventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    SecondChangeEmmiterComponent,
    FatherChangeEmmiterComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBindingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
