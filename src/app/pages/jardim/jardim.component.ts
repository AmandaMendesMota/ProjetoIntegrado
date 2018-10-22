import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;

import { ToasterConfig, ToasterService, Toast, BodyOutputType, ToasterModule, ToasterContainerComponent } from 'angular2-toaster';


interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-jardim',
  styleUrls: ['./jardim.component.scss'],
  templateUrl: './jardim.component.html',
})
export class JardimComponent implements OnDestroy {

  private alive = true;

  lightCard: CardSettings = {
    title: 'Sistema de Irrigação',
    iconClass: 'nb-drops',
    type: 'primary',
  };
 /* rollerShadesCard: CardSettings = {
    title: 'Umidade Ar',
    iconClass: 'nb-drop',
    type: 'success',
  };*/
  wirelessAudioCard: CardSettings = {
    title: 'Iluminação',
    iconClass: 'nb-lightbulb',
    type: 'info',
  };
 /* coffeeMakerCard: CardSettings = {
    title: 'Sistema de Irrigação',
    iconClass: 'nb-paper-plane',
    type: 'warning',
  };*/

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
   // this.rollerShadesCard,
    this.wirelessAudioCard,
   // this.coffeeMakerCard,
  ];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet,
    cosmic: this.commonStatusCardsSet,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
     /* {
        ...this.rollerShadesCard,
        type: 'primary',
      },*/
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
     /* {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },*/
    ],
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
