import { Component } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  navbarIsIn = false;

  constructor(private dataStorageService: DataStorageService,
    public authService: AuthService,
    private router: Router) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  toggleNavbar() {
    let isIn = this.navbarIsIn;
    this.navbarIsIn = isIn === false ? true : false;
  }
}
