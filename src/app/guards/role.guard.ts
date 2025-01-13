import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const expectedRole = route.data['role'];  
    const userRole = this.authService.getUserRole();  
    console.log('userRole:', userRole);
    console.log('expectedRole:', expectedRole);
    
    if (userRole === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/unauthorized']);
      return false;
    }

  }
}
