import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessComponent } from './components/success/success.component';
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    BindingComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
