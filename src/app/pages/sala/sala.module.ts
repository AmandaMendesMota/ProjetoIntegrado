import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { SalaComponent } from './sala.component';
import { StatusCardComponent } from './status-card/status-card.component';
/*import { RoomsComponent } from '../dashboard/rooms/rooms.component';
import { RoomSelectorComponent } from '../dashboard/rooms/room-selector/room-selector.component';*/
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { TemperatureDragger2Component } from './temperature2/temperature-dragger2/temperature-dragger2.component';
import { Temperature2Component } from './temperature2/temperature2.component';
/*import { TeamComponent } from '../dashboard/team/team.component';
import { KittenComponent } from '../dashboard/kitten/kitten.component';
import { SecurityCamerasComponent } from '../dashboard/security-cameras/security-cameras.component';
import { ElectricityComponent } from '../dashboard/electricity/electricity.component';
import { ElectricityChartComponent } from '../dashboard/electricity/electricity-chart/electricity-chart.component';
import { WeatherComponent } from '../dashboard/weather/weather.component';
import { SolarComponent } from '../dashboard/solar/solar.component';
import { PlayerComponent } from '../dashboard/rooms/player/player.component';
import { TrafficComponent } from '../dashboard/traffic/traffic.component';
import { TrafficChartComponent } from '../dashboard/traffic/traffic-chart.component';*/


import { ToasterModule, ToasterService } from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    ToasterModule
  ],
  declarations: [
    SalaComponent,
    StatusCardComponent,
    TemperatureDraggerComponent,
    TemperatureComponent,
    TemperatureDragger2Component,
    Temperature2Component,
    /*ContactsComponent,
    RoomSelectorComponent,
    RoomsComponent,
    TeamComponent,
    KittenComponent,
    SecurityCamerasComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    WeatherComponent,
    PlayerComponent,
    SolarComponent,
    TrafficComponent,
    TrafficChartComponent,*/
  ],
})
export class SalaModule { }
