import { Component, OnInit, DoCheck, ElementRef, AfterViewInit, ViewChild, Renderer2, HostListener } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, DoCheck, AfterViewInit {
  private products: any;
  @ViewChild('product') product: ElementRef;
  selectedCat: any;
  constructor(private service: ProductsService, private router: Router, private render: Renderer2) {
   }
   goSomeWhere(): any {

   }
  ngOnInit() {
    this.service.getProducts().subscribe((res) => {
      this.products = res;
    })
    
  }
  ngDoCheck():any {
    if(this.router.url == '/Laptop'){
      this.selectedCat = this.products.filter((item) => item.Category == "Laptops")
    } else if (this.router.url == '/Accessories') {
      this.selectedCat = this.products.filter((item) => item.Category == "Accessories")
    }
    else if (this.router.url == '/Tablets') {
      this.selectedCat = this.products.filter((item) => item.Category == "Tablets")
    }
    else if (this.router.url == '/Smartphones') {
      this.selectedCat = this.products.filter((item) => item.Category == "Smartphones and Tablets")
    }
    else if (this.router.url == '/Flat') {
      this.selectedCat = this.products.filter((item) => item.Category == "Flat Screen Monitors")
    }
    else if (this.router.url == '/Printers') {
      this.selectedCat = this.products.filter((item) => item.Category == "Printers")
    }
    else if (this.router.url == '/MulPrinter') {
      this.selectedCat = this.products.filter((item) => item.Category == "Multifunction Printers")
    }
    else if (this.router.url == '/Mice') {
      this.selectedCat = this.products.filter((item) => item.Category == "Mice")
    }
  }
  ngAfterViewInit() {
    //console.log(this.product.nativeElement)
    //this.render.setStyle(this.product.nativeElement, 'backgroundColor', 'red')
    this.render.removeStyle(this.product.nativeElement, 'border');
    this.render.createComment('hi dandwate vishal');
  }
  

}
