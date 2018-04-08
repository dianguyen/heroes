import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MaumoiComponent } from './maumoi/maumoi.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';


const routes: Routes =[
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  
  { path: 'home', component: HomeComponent },
  { path: 'lienhe', component: ContactComponent},
  { path: 'hoatuoi', component: ContactComponent},
  { path: 'hoachau', component: ContactComponent},
  { path: 'khuyenmai', component: ContactComponent},
  { path: 'maumoi', component: MaumoiComponent, data: {title: "Sản phẩm mới", type: "maumoi"} },
  { path: 'products', component: ProductManagerComponent},

];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})


export class AppRoutingModule { }
