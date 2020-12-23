import {Routes} from '@angular/router';
import {AppComponent} from './container/app.component';
import {NominationsFormResolver} from './resolvers/NominationsFormResolver';
import {ViewResultsContainerComponent} from './components/view-results-container/view-results-container.component';
import {NominationsFormContainerComponent} from './components/nominations-form-container/nominations-form-container.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nominate'
  },
  {
    path: 'results',
    component: ViewResultsContainerComponent
  },
  {
    path: 'nominate',
    component: NominationsFormContainerComponent,
    resolve: {
      app: NominationsFormResolver
    }
  }
];
