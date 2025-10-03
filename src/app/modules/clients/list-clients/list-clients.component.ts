import { Component } from '@angular/core';
import { CreateClientsCompanyComponent } from '../create-clients-company/create-clients-company.component';
import { CreateClientsPersonaComponent } from '../create-clients-persona/create-clients-persona.component';
import { EditClientsCompanyComponent } from '../edit-clients-company/edit-clients-company.component';
import { EditClientsPersonaComponent } from '../edit-clients-persona/edit-clients-persona.component';
import { DeleteClientsComponent } from '../delete-clients/delete-clients.component';
import { ClientsService } from '../service/clients.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent {
   search:string = '';
    CLIENTS:any = [];
    isLoading$:any;
  
    totalPages:number = 0;
    currentPage:number = 1;
    constructor(
      public modalService: NgbModal,
      public clientService: ClientsService,
    ) {
      
    }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.isLoading$ = this.clientService.isLoading$;
      this.listClients();
    }
  
    listClients(page = 1){
      this.clientService.listClient(page,this.search).subscribe((resp:any) => {
        console.log(resp);
        this.CLIENTS = resp.client_segments;
        this.totalPages = resp.total;
        this.currentPage = page;
      })
    }
  
    loadPage($event:any){
      this.listClients($event);
    }
  
    createClientCompany(){
      const modalRef = this.modalService.open(CreateClientsCompanyComponent,{centered:true, size: 'md'});
  
      modalRef.componentInstance.ClientsC.subscribe((client_segment:any) => {
        this.CLIENTS.unshift(client_segment);
      })
    }
    createClientPerson(){
      const modalRef = this.modalService.open(CreateClientsPersonaComponent,{centered:true, size: 'md'});
  
      modalRef.componentInstance.ClientSegmentC.subscribe((client_segment:any) => {
        this.CLIENTS.unshift(client_segment);
      })
    }
  
    editClientCompany(CLIENT_SEGMENT:any){
      const modalRef = this.modalService.open(EditClientsCompanyComponent,{centered:true, size: 'md'});
      modalRef.componentInstance.CLIENT_SEGMENT_SELECTED = CLIENT_SEGMENT;
  
      modalRef.componentInstance.ClientSegmentE.subscribe((client_segment:any) => {
        let INDEX = this.CLIENTS.findIndex((client_seg:any) => client_seg.id == CLIENT_SEGMENT.id);
        if(INDEX != -1){
          this.CLIENTS[INDEX] = client_segment;
        }
      })
    }
    editClientPerson(CLIENT_SEGMENT:any){
      const modalRef = this.modalService.open(EditClientsPersonaComponent,{centered:true, size: 'md'});
      modalRef.componentInstance.CLIENT_SEGMENT_SELECTED = CLIENT_SEGMENT;
  
      modalRef.componentInstance.ClientSegmentE.subscribe((client_segment:any) => {
        let INDEX = this.CLIENTS.findIndex((client_seg:any) => client_seg.id == CLIENT_SEGMENT.id);
        if(INDEX != -1){
          this.CLIENTS[INDEX] = client_segment;
        }
      })
    }
  
    deleteCLient(CLIENT_SEGMENT:any){
      const modalRef = this.modalService.open(DeleteClientsComponent,{centered:true, size: 'md'});
      modalRef.componentInstance.CLIENT_SEGMENT_SELECTED = CLIENT_SEGMENT;
  
      modalRef.componentInstance.ClientSegmentD.subscribe((client_segment:any) => {
        let INDEX = this.CLIENTS.findIndex((client_seg:any) => client_seg.id == CLIENT_SEGMENT.id);
        if(INDEX != -1){
          this.CLIENTS.splice(INDEX,1);
        }
        // this.ROLES.unshift(role);
      })
    }
}
