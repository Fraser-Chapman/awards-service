import {Routes} from '@angular/router';
import {NominationsFormResolver} from './resolvers/NominationsFormResolver';
import {ViewResultsContainerComponent} from './components/view-results-container/view-results-container.component';
import {NominationsFormContainerComponent} from './components/nominations-form-container/nominations-form-container.component';
import {ViewResultsResolver} from './resolvers/ViewResultsResolver';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nominate'
  },
  {
    path: 'results',
    component: ViewResultsContainerComponent,
    resolve: {
      app: ViewResultsResolver
    }
  },
  {
    path: 'nominate',
    component: NominationsFormContainerComponent,
    resolve: {
      app: NominationsFormResolver
    }
  }
];
