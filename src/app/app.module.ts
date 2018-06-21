import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { SuccessComponent } from './components/success/success.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';

import { GameControlComponent } from './components/gameComponents/game-control/game-control.component';
import { OddNumberComponent } from './components/gameComponents/odd-number/odd-number.component';
import { EventNumberComponent } from './components/gameComponents/even-number/even-number.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    BindingComponent,
    DirectivesComponent,
    GameControlComponent,
    OddNumberComponent,
    EventNumberComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
