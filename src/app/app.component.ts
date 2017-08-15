import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    const authUser = Object.keys(window.localStorage).filter(item => {
      return item.startsWith('firebase:authUser')
    });

    firebase.initializeApp({
      apiKey: 'AIzaSyDWjowDrw_BtYxCmKWnu5av92V1KYBplxg',
      authDomain: 'ng-recipe-f8761.firebaseapp.com',
    });

    this.authService.token = authUser[0];
  }
}
