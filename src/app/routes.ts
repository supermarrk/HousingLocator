import {Routes} from '@angular/router';
import {DetailsComponent} from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
  ];
  export default routeConfig;