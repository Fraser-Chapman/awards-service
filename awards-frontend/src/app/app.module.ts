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
import { NominationsFormComponent } from './components/nominations-form/nominations-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {NominationsEffects} from './state/nominations/nominations.effects';
import {nominationsReducer} from './state/nominations/nominations.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    NominationsFormContainerComponent,
    NavigationBarComponent,
    NominationsFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('categories', categoriesReducer),
    StoreModule.forFeature('nominations', nominationsReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([CategoriesEffects, NominationsEffects]),
    RouterModule.forRoot(ROUTES),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    FormsModule,
  ],
  providers: [
    NominationsFormResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
