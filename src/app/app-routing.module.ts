import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './components/laptop/laptop.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { TabletsComponent } from './components/tablets/tablets.component';
import { MiceComponent } from './components/mice/mice.component';
import { MulPrinterComponent } from './components/mul-printer/mul-printer.component';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { FlatComponent } from './components/flat/flat.component';
import { PrintersComponent } from './components/printers/printers.component';

const routes: Routes = [
  { path: 'Laptop', component: LaptopComponent },
  { path: 'Accessories', component: AccessoriesComponent },
  { path: 'Tablets', component: TabletsComponent },
  { path: 'Mice', component: MiceComponent },
  { path: 'MulPrinter', component: MulPrinterComponent },
  { path: 'Smartphones', component: SmartphonesComponent },
  { path: 'Flat', component: FlatComponent },
  { path: 'Printers', component: PrintersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
