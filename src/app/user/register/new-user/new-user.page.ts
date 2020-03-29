import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../../services/tools/tool.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  formRegister: FormGroup;

  constructor(private router: Router, private tool: ToolService, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formRegister = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      rfc: ['', Validators.compose([Validators.required, Validators.pattern('[A-Z]{4}[0-9]{6}[A-Z]{3}')])],
      date: ['', Validators.compose([Validators.required])],
      photo: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]+@[a-zA-Z]+\.[a-z]+')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9!_#$%&/()=?¡]+')])],
      r_password: ['', Validators.compose([Validators.required])]
    });
  }

  getPhoto() {
    this.formRegister.get('photo').setValue(this.tool.getPhoto());
  }

  signUp() {
    if (this.formRegister.get('gender').value === '') {
      this.formRegister.get('gender').setValue('Hombre');
    }

    if (this.formRegister.get('date').value === '') {
      this.formRegister.get('date').setValue('1990-02-19');
    }

    if (this.formRegister.valid) {
      if (this.formRegister.get('password').value === this.formRegister.get('r_password').value) {
        this.userService.addUser({
          name: {
            firstName: this.formRegister.get('name').value,
            lastName: this.formRegister.get('lastName').value,
            fullName: this.formRegister.get('name').value + ' ' + this.formRegister.get('lastName').value
          },
          email: this.formRegister.get('email').value,
          photo: this.formRegister.get('photo').value,
          password: this.formRegister.get('password').value,
          birthday: this.formRegister.get('date').value,
          gender: this.formRegister.get('gender').value,
          rfc: this.formRegister.get('rfc').value,
          interests: [
            {interest: 'no sé'}
          ],
          gallery: [
            {photo: 'assets/img/avatar.png', description: 'hola'},
            {photo: 'assets/img/avatar.png', description: 'gg'},
            {photo: 'assets/img/avatar.png', description: 'sdf'}
          ],
          active: true
        });
        this.tool.showMessageToast('Se registró con éxito');
        this.router.navigate(['/home']);
      } else {
        this.tool.showMessage('ATENCION', 'Las contraseñas ingresadas no coinciden');
      }
    } else {
      this.tool.showMessage('ATENCION', 'Faltan valores por ingresar o existen algunos ingresador incorrectamente');
    }
  }

}
