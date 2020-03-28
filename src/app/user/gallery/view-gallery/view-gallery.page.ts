import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-view-gallery',
  templateUrl: './view-gallery.page.html',
  styleUrls: ['./view-gallery.page.scss'],
})
export class ViewGalleryPage implements OnInit {

  user: User;

  constructor(private actroute: ActivatedRoute, private router: Router) {
    this.actroute.queryParams.subscribe(
      params => {
        this.user = JSON.parse(params.special);
      }
    );
  }

  ngOnInit() {
  }

}
