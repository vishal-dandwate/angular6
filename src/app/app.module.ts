import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { LaptopComponent } from './components/laptop/laptop.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { TabletsComponent } from './components/tablets/tablets.component';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { FlatComponent } from './components/flat/flat.component';
import { PrintersComponent } from './components/printers/printers.component';
import { MulPrinterComponent } from './components/mul-printer/mul-printer.component';
import { MiceComponent } from './components/mice/mice.component';
import { ProductDirective } from './components/products/product.directive';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProductsComponent,
    LaptopComponent,
    AccessoriesComponent,
    TabletsComponent,
    SmartphonesComponent,
    FlatComponent,
    PrintersComponent,
    MulPrinterComponent,
    MiceComponent,
    ProductDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
