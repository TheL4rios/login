import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = new Array();

  constructor() {
    this.users.push({
      name: {
        firstName: 'Arturo',
        lastName: 'Larios',
        fullName: 'Arturo Larios'
      },
      email: 'arturo_kiros@hotmail.com',
      photo: 'assets/img/avatar.png',
      password: '12345',
      birthday: new Date('1997-12-22'),
      gender: 'Hombre',
      rfc: 'LAQAHTNRRR08',
      interests: [
        {interest: 'Programar'},
        {interest: 'jugar'}
      ],
      gallery: [{
        photo: 'assets/img/avatar.png',
        description: 'No sé qué poner'
      }],
      active: true
    });

    this.users.push({
      name: {
        firstName: 'Brandon',
        lastName: 'Ulloa',
        fullName: 'Brandon Ulloa'
      },
      email: 'br4nuo@gmail.com',
      photo: 'assets/img/goku.jpeg',
      password: '12345',
      birthday: new Date('1996-12-22'),
      gender: 'Hombre',
      rfc: 'GGHTNRRR08',
      interests: [
        {interest: 'Programar'},
        {interest: 'jugar'}
      ],
      gallery: [
        {
          photo: 'assets/img/goku.jpeg',
          description: 'No sé qué poner'
        },
        {
          photo: 'assets/img/avatar.png',
          description: 'Solo es una imagen'
        }
      ],
      active: true
    });
   }

  getUsers(): User[] {
    return this.users;
  }
}
