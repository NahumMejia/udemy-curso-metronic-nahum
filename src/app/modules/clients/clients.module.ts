import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { EditClientsPersonaComponent } from './edit-clients-persona/edit-clients-persona.component';
import { DeleteClientsComponent } from './delete-clients/delete-clients.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { CreateClientsCompanyComponent } from './create-clients-company/create-clients-company.component';
import { EditClientsCompanyComponent } from './edit-clients-company/edit-clients-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateClientsPersonaComponent } from './create-clients-persona/create-clients-persona.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  declarations: [
    ClientsComponent,
    CreateClientsPersonaComponent,
    EditClientsPersonaComponent,
    DeleteClientsComponent,
    ListClientsComponent,
    CreateClientsCompanyComponent,
    EditClientsCompanyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
    NgbPaginationModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
