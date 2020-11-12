import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './container/app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { NominationsFormContainerComponentComponent } from './components/nominations-form-container-component/nominations-form-container-component.component';
import { EffectsModule } from '@ngrx/effects';
import { NavigationBarComponentComponent } from './components/navigation-bar-component/navigation-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NominationsFormContainerComponentComponent,
    NavigationBarComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
