import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './App.Component';
import { RouterModule } from '@angular/router';
import { routes } from './App.Routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
