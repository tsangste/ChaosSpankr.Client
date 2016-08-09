import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { provideRouter } from '@angular/router';
import { CardAppRoutes  } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [provideRouter(CardAppRoutes)]);

