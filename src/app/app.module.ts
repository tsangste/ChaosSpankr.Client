import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card';
import { ClientArrivalViewComponent } from './client-arrival-view';
import { CardAppRoutes } from './app.routes';
import { SessionService } from './session.service';
import { GlobalSettingsService } from './globalSettings.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClientArrivalViewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(CardAppRoutes)
  ],
  providers: [GlobalSettingsService, SessionService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
