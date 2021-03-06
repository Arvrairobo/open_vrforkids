import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {StorageService} from "src/app/servicios/storage.service";
@Injectable()
export class AuthorizatedGuard implements CanActivate {
  constructor(private router: Router,
              private storageService: StorageService) { }
  canActivate() {
    if (this.storageService.isAuthenticatedAdmin()) {
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/inicio']);
    return false;
  }

}

@Injectable()
export class AuthorizatedGuardProfesor implements CanActivate {
  constructor(private router: Router,
              private storageService: StorageService) { }
  canActivate() {
    if (this.storageService.isAuthenticatedProfesor()) {
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/inicio']);
    return false;
  }

}

@Injectable()
export class AuthorizatedGuardAlumno implements CanActivate {
  constructor(private router: Router,
              private storageService: StorageService) { }
  canActivate() {
    if (this.storageService.isAuthenticatedAlumno()) {
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/inicio']);
    return false;
  }

}