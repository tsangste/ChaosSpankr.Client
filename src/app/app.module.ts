import { NgModule }       from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { CardAppRoutes } from './app.routes';
import { CardComponent } from './card';

@NgModule({
    declarations: [AppComponent, CardComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(CardAppRoutes)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
