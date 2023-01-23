import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:IProducts[];
  productsSubscription:Subscription;
  canEdit:boolean=false;

  constructor(private ProductsService:ProductsService,public dialog:MatDialog){}

  ngOnInit():void{

    this.canEdit=true;
    
    this.productsSubscription=this.ProductsService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }

  openDialog(product?:IProducts): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(DialogBoxComponent,dialogConfig);

    dialogConfig.data = product;

    dialogRef.afterClosed().subscribe((data)=> {
      if(data)
        this.postData(data)
    })
  
  }

  deleteItem(id:number){
    this.ProductsService.deleteProduct(id).subscribe(() => this.products.find((item)=>{
      if(id===item.id){
        let idx = this.products.findIndex((data) => data.id === id)
        this.products.splice(idx,1)
      }
    }))
  }

  postData(data:IProducts){
    console.log(data)
    this.ProductsService.postProduct(data).subscribe((data) => this.products.push(data))
  }

  updateData(product:IProducts){
    this.ProductsService.updateProduct(product).subscribe((data) => {
      
    })

  }

  ngOnDestroy(){
    if(this.productsSubscription) this.productsSubscription.unsubscribe();
  }

}
