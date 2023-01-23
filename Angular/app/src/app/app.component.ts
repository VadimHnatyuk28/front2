import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  // template: `<h1>Hello world {{ title }}</h1>`,
  // styles: [`h1{color:green;}`]
})

export class AppComponent implements OnInit {
  
  title = 'test_pjoject'
  loading = false
  // products: IProduct [] = []
  products$:Observable<IProduct[]>

  constructor(private productsService:ProductsService){}

  ngOnInit(): void {
    this.loading = true
    this.products$=this.productsService.getAll().pipe(
      tap(()=> this.loading = false)
    )
    // this.productsService.getAll().subscribe(products=>{
    //   this.products = products
    //   this.loading = false
    // })
  }

}
