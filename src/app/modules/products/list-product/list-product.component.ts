import { Component } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
    
    search:string = '';
    PRODUCTS:any = [];
    isLoading$:any;

    roles:any = [];

    totalPages:number = 0;
    currentPage:number = 1;
    constructor(
      public modalService: NgbModal,
      public productService: ProductsService,
    ) {
      
    }

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.isLoading$ = this.productService.isLoading$;
      this.listProducts();
      //this.configAll();
    }

    listProducts(page = 1){
      this.productService.listProducts(page,this.search).subscribe((resp:any) => {
        console.log(resp);
        this.PRODUCTS = resp.products.data;
        this.totalPages = resp.total;
        this.currentPage = page;
      })
    }
    configAll(){
      this.productService.configAll().subscribe((resp:any) => {
        console.log(resp);
        //this.roles = resp.roles;
      })
    }
    getDisponibilidad(val:number){
      let TEXTO = '';
      switch(val){
        case 1:
          TEXTO = "Vender los products sin stock";
          break;
        case 2:
            TEXTO = "No vender los products sin stock";
          break;
        case 3:
            TEXTO = "Proyectar los contratos que se tengan";
          break;
      }
      return TEXTO;
    }

    getTaxSelected(val:number){
      let TEXTO = '';
      switch(val){
        case 1:
          TEXTO = "Tax Free";
          break;
        case 2:
            TEXTO = "Taxable good";
          break;
        case 3:
            TEXTO = "Downloadble product";
          break;
      }
    }

    loadPage($event:any){
      this.listProducts($event);
    }

    deleteProduct(PRODUCT:any){
      const modalRef = this.modalService.open(DeleteProductComponent,{centered:true, size: 'md'});
      modalRef.componentInstance.PRODUCT_SELECTED = PRODUCT;

      modalRef.componentInstance.ProductD.subscribe((prod:any) => {
        let INDEX = this.PRODUCTS.findIndex((prod:any) => prod.id == PRODUCT.id);
        if(INDEX != -1){
          this.PRODUCTS.splice(INDEX,1);
        }
      })
    }
}
