import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessageService} from './message.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { DetailComponent } from './detail/detail.component';
import { FlowerComponent } from './flower/flower.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { MaumoiComponent } from './maumoi/maumoi.component';
import { DataService } from './data.service';

import { HttpClientModule } from '@angular/common/http';
import { ProductManagerComponent } from './product-manager/product-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    DetailComponent,
    FlowerComponent,
    ContactComponent,
    MaumoiComponent,
    ProductManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MessageService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
