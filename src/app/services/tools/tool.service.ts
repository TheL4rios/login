import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private alert: AlertController, private fileChooser: FileChooser) { }

  async showMessage(head: string, mess: string) {
    const al = await this.alert.create({
      header: head,
      message: mess,
      buttons: [{
        text: 'OK',
        handler: () => {}
      }]
    });
    await al.present();
  }

  getPhoto(): string {
    let url = '';
    this.fileChooser.open()
      .then(uri => url = uri)
      .catch(e => this.showMessage('Error', e));
    return url;
  }
}
