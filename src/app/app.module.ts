import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import {RouterModule} from '@angular/router';
import {CardAppRoutes} from './app.routes';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(CardAppRoutes)
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
