import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/main-comp/header/header.component';
import { FooterComponent } from './component/main-comp/footer/footer.component';
import { MessagebodyComponent } from './component/main-comp/messagebody/messagebody.component';
import { MainCompComponent } from './component/main-comp/main-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessagebodyComponent,
    MainCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
