import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterOutlet,
} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'portfolioApp';
  showLoader: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe((_routerEvent: RouterEvent | any) => {
      this.checkRouteChange(_routerEvent);
    });
  }

  checkRouteChange(routerEvent: RouterEvent) {
    // console.log('router event');
    // console.log(routerEvent);

    // if route change started
    if (routerEvent instanceof NavigationStart) {
      this.showLoader = true;
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.showLoader = false;
    }
  }
}
