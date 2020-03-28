import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.page.html',
  styleUrls: ['./view-profile.page.scss'],
})
export class ViewProfilePage implements OnInit {

  user: User;

  constructor(private actroute: ActivatedRoute, private router: Router) {
    this.actroute.queryParams.subscribe(
      params => {
        this.user = JSON.parse(params.special);
      }
    );
  }

  ngOnInit() {}

  viewGallery(user: User) {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(user)
      }
    };
    this.router.navigate(['/view-gallery'], extras);
  }
}
