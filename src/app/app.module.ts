import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Diagnostic } from '@ionic-native/diagnostic';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PositioningPage } from '../pages/positioning/positioning';
import { NavbarComponent } from '../components/navbar/navbar';
import { MapButtonComponent } from '../components/mapButton/mapButton';
import { PermissionsService } from '../services/permissions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PositioningPage,
    NavbarComponent,
    MapButtonComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PositioningPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GoogleMaps,
    Diagnostic,
    PermissionsService
  ]
})
export class AppModule { }
