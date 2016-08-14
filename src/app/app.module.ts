import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardAppRoutes } from './app.routes';
import { CardComponent } from './card';
import { ClientArrivalViewComponent } from './client-arrival-view';
import { SessionService } from './session.service';
import { GlobalSettingsService } from './globalSettings.service';


@NgModule({
  declarations: [AppComponent, CardComponent, ClientArrivalViewComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(CardAppRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [HTTP_PROVIDERS, GlobalSettingsService, SessionService]
})
export class AppModule {
}
