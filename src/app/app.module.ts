import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSharedModule } from './app-shared/app-shared.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { environment } from '../environments/environment'


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppSharedModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBivW__mV76H4nn_b95CecBCPgQLYdEaAQ",
      authDomain: "zerodha-a1fc5.firebaseapp.com",
      projectId: "zerodha-a1fc5",
      storageBucket: "zerodha-a1fc5.appspot.com",
      messagingSenderId: "592965746249",
      appId: "1:592965746249:web:2c4b9241280caa14d88998",
      measurementId: "G-2K9S3M0SDM"

    }),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
