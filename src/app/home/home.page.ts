import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { ToolService } from '../services/tools/tool.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: User[] = [];
  myForm: FormGroup;

  constructor(private userService: UserService, private tool: ToolService, private router: Router, private fb: FormBuilder) {
    this.users = this.userService.getUsers();
    this.initializeForm();
  }

  initializeForm(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    if (this.myForm.valid) {
      this.users.forEach(user => {
        if (this.myForm.get('email').value === user.email && this.myForm.get('password').value === user.password) {
          this.accessToAccount(true, user);
        }
      });
    } else {
      this.accessToAccount(false, null);
    }
  }

  accessToAccount(access: boolean, user: User): void {
    if (access) {
      this.myForm.get('email').setValue('');
      this.myForm.get('password').setValue('');
      this.viewProfile(user);
    } else {
      this.tool.showMessage('ATENCION!!', 'Email o contraseña incorrectos.');
    }
  }

  viewProfile(user: User) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(user)
      }
    };
    this.router.navigate(['/view-profile'], extras);
  }

  signUp() {
    this.router.navigate(['/new-user']);
  }
}
