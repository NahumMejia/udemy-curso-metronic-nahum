import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { CreateClientsPersonaComponent } from './create-clients-persona/create-clients-persona.component';
import { EditClientsPersonaComponent } from './edit-clients-persona/edit-clients-persona.component';
import { DeleteClientsComponent } from './delete-clients/delete-clients.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { CreateClientsCompanyComponent } from './create-clients-company/create-clients-company.component';
import { EditClientsCompanyComponent } from './edit-clients-company/edit-clients-company.component';


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
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
