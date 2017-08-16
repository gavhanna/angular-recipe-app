import { Component, OnInit, OnDestroy } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {

    firebase.initializeApp({
      apiKey: 'AIzaSyDWjowDrw_BtYxCmKWnu5av92V1KYBplxg',
      authDomain: 'ng-recipe-f8761.firebaseapp.com',
    });

    // const authUser = Object.keys(window.localStorage).filter(item => {
    //   return item.startsWith('firebase:authUser')
    // });
    // this.authService.token = authUser[0];
    // console.log(Object.keys(window.localStorage).filter(item => {
    //   return item.startsWith('firebase:authUser')
    // })[0]);
  }

  ngOnDestroy() {
  }
}
