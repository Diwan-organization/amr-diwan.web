import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './App.Component';
import { RouterModule } from '@angular/router';
import { routes } from './App.Routes';
import { PreLoaderComponent } from '@App/Common/Widgets/Spinners/PreLoader/PreLoader';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './AppConfig';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes, { useHash: true }),
    PreLoaderComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (appConfig: AppConfig) => () => appConfig.LoadAppConfig(),
      multi: true,
      deps: [AppConfig]
    },
    AppConfig,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
