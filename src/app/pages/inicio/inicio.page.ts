import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


interface MenuButton{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  botonesMenu: MenuButton[] = [
    {
      icon: 'clipboard',
      name: 'Ingresar dieta semanal',
      redirecTo: '/ing-dieta'
    },
    {
      icon: 'pencil',
      name: 'Modificar dieta semanal',
      redirecTo: '/mod-dieta'
    },
    {
      icon: 'bulb',
      name: 'Sugerencias',
      redirecTo: '/sugerencias'
    }
  ];

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async loginAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header: 'Iniciar Sesión',
      inputs: [
        {
          name: 'user',
          type: 'text',
          placeholder: 'Nombre de usuario o correo'
        },
        {
          name: 'pass',
          type: 'password',
          placeholder: 'Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-class',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          cssClass: 'alert-class',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async registroAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header: 'Registro',
      inputs: [
        {
          name: 'user',
          type: 'text',
          placeholder: 'Nombre de usuario'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo electrónico'
        },
        {
          name: 'pass',
          type: 'password',
          placeholder: 'Contraseña'
        },
        {
          name: 'pass2',
          type: 'password',
          placeholder: 'Confirmar contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-class',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          cssClass: 'alert-class',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async configAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header: 'Configuración',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          handler: () => {
            console.log('Checkbox 1 selected');
          },
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2',
          handler: () => {
            console.log('Checkbox 2 selected');
          }
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3',
          handler: () => {
            console.log('Checkbox 3 selected');
          }
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4',
          handler: () => {
            console.log('Checkbox 4 selected');
          }
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5',
          handler: () => {
            console.log('Checkbox 5 selected');
          }
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6',
          handler: () => {
            console.log('Checkbox 6 selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-class',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          cssClass: 'alert-class',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
