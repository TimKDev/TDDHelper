import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefactorCycleComponent } from './refactor-cycle/refactor-cycle.component';
import { RulesContainerComponent } from './rules-container/rules-container.component';

@NgModule({
  declarations: [
    AppComponent,
    RefactorCycleComponent,
    RulesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
