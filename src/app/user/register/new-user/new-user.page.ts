import { Component, OnInit } from '@angular/core';
import { ToolService } from '../../../services/tools/tool.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  constructor(private tool: ToolService) { }

  ngOnInit() {
  }

  signUp() {}

}
