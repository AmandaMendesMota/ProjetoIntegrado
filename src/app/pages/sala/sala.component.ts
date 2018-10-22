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
  selector: 'ngx-sala',
  styleUrls: ['./sala.component.scss'],
  templateUrl: './sala.component.html',
})
export class SalaComponent implements OnDestroy {

  private alive = true;

  lightCard: CardSettings = {
    title: 'Fechadura Porta',
    iconClass: 'fas fa-door-open',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Fechadura Janela',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Iluminação',
    iconClass: 'nb-lightbulb',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Energia Elétrica',
    iconClass: 'fas fa-plug',
    type: 'warning',
  };

  statusCards: string;

  commonStatusCardsSet: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
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
