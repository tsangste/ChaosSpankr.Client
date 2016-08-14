import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
    HttpModule,
    RouterModule.forRoot(CardAppRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [GlobalSettingsService, SessionService]
})
export class AppModule {
}
