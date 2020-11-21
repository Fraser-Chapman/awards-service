import {Routes} from '@angular/router';
import {AppComponent} from './container/app.component';
import {NominationsFormResolver} from './resolvers/NominationsFormResolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    resolve: {
      app: NominationsFormResolver
    }
  }
];
