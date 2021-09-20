import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface semanaDieta{
  name: string;
}

@Component({
  selector: 'app-mod-dieta',
  templateUrl: './mod-dieta.page.html',
  styleUrls: ['./mod-dieta.page.scss'],
})
export class ModDietaPage implements OnInit {

  botonesDias: semanaDieta[] = [
    {
      name: 'Día 1: Lunes'
    },
    {
      name: 'Día 2: Martes'
    },
    {
      name: 'Día 3: Miércoles'
    },
    {
      name: 'Día 4: Jueves'
    },
    {
      name: 'Día 5: Viernes'
    },
    {
      name: 'Día 6: Sábado'
    },
    {
      name: 'Día 7: Domingo'
    },
  ];

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async modAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header: 'Iniciar Sesión',
      inputs: [
        {
          name: 'Comida 1',
          type: 'text',
          placeholder: 'Nombre de la Primera comida'
        },
        {
          name: 'Calorias 1',
          type: 'number',
          placeholder: 'Calorias'
        },
        {
          name: 'Comida 2',
          type: 'text',
          placeholder: 'Nombre de la Segunda comida'
        },
        {
          name: 'Calorias 2',
          type: 'number',
          placeholder: 'Calorias'
        },
        {
          name: 'Comida 3',
          type: 'text',
          placeholder: 'Nombre de la Tercera comida'
        },
        {
          name: 'Calorias 3',
          type: 'number',
          placeholder: 'Calorias'
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

}
