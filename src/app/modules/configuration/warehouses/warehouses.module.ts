import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehousesComponent } from './warehouses.component';
import { ListWherehouseComponent } from './list-wherehouse/list-wherehouse.component';
import { CreateWherehouseComponent } from './create-wherehouse/create-wherehouse.component';
import { EditWherehouseComponent } from './edit-wherehouse/edit-wherehouse.component';
import { DeleteWherehouseComponent } from './delete-wherehouse/delete-wherehouse.component';

@NgModule({
  declarations: [
    WarehousesComponent,
    ListWherehouseComponent,
    CreateWherehouseComponent,
    EditWherehouseComponent,
    DeleteWherehouseComponent
  ],
  imports: [
    CommonModule,
    WarehousesRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule
  ]
})
export class WarehousesModule { }