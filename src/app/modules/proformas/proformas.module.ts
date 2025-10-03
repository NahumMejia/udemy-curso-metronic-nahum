import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProformasRoutingModule } from './proformas-routing.module';
import { ProformasComponent } from './proformas.component';
import { CreateProformaComponent } from './create-proforma/create-proforma.component';
import { EditProformaComponent } from './edit-proforma/edit-proforma.component';
import { ListProformasComponent } from './list-proformas/list-proformas.component';
import { DeleteProformaComponent } from './delete-proforma/delete-proforma.component';
import { SearchProductsComponent } from './components/search-products/search-products.component';
import { SearchClientsComponent } from './components/search-clients/search-clients.component';
import { AddPaymentsComponent } from './components/add-payments/add-payments.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    ProformasComponent,
    CreateProformaComponent,
    EditProformaComponent,
    ListProformasComponent,
    DeleteProformaComponent,
    SearchProductsComponent,
    SearchClientsComponent,
    AddPaymentsComponent
  ],
  imports: [
    CommonModule,
    ProformasRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbPaginationModule,
  ]
})
export class ProformasModule { }
