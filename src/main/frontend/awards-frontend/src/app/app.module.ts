import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './container/app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { NominationsFormContainerComponent } from './components/nominations-form-container/nominations-form-container.component';
import { EffectsModule } from '@ngrx/effects';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {NominationsFormResolver} from './resolvers/NominationsFormResolver';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {categoriesReducer} from './state/categories/categories.reducer';
import {CategoriesEffects} from './state/categories/categories.effects';

@NgModule({
  declarations: [
    AppComponent,
    NominationsFormContainerComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('categories', categoriesReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CategoriesEffects]),
    RouterModule.forRoot(ROUTES),
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [
    NominationsFormResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
