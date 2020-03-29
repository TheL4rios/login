import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private alert: AlertController, private fileChooser: FileChooser, private toastController: ToastController) { }

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

  async showMessageToast(mess: string) {
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000
    });
    toast.present();
  }

  getPhoto(): string {
    let url = '';
    this.fileChooser.open()
      .then(uri => url = uri)
      .catch(e => this.showMessage('Error', e));
    return url;
  }
}
