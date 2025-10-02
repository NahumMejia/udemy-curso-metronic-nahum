import { Component, OnInit } from '@angular/core';
import { CreateProvidersComponent } from '../create-providers/create-providers.component';
import { EditProvidersComponent } from '../edit-providers/edit-providers.component';
import { DeleteProvidersComponent } from '../delete-providers/delete-providers.component';
import { ProvidersService } from '../service/providers.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lists-providers',
  templateUrl: './lists-providers.component.html',
  styleUrls: ['./lists-providers.component.scss']
})
export class ListsProvidersComponent implements OnInit {

  search: string = '';
  PROVIDERS: any = [];
  isLoading$: any;

  totalPages: number = 0;
  currentPage: number = 1;

  constructor(
    public modalService: NgbModal,
    public providersService: ProvidersService,
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.providersService.isLoading$;
    this.listProviders();
  }

  listProviders(page = 1) {
    this.providersService.listProviders(page, this.search).subscribe((resp: any) => {
      console.log('Proveedores:', resp);
      this.PROVIDERS = resp.providers;
      this.totalPages = resp.total;
      this.currentPage = page;
    });
  }

  loadPage($event: any) {
    this.listProviders($event);
  }

  createProvider() {
    const modalRef = this.modalService.open(CreateProvidersComponent, {centered: true, size: 'md'});

    modalRef.componentInstance.ProviderC.subscribe((provider: any) => {
      this.PROVIDERS.unshift(provider);
    });
  }

  editProvider(PROVIDER: any) {
    const modalRef = this.modalService.open(EditProvidersComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.PROVIDER_SELECTED = PROVIDER;

    modalRef.componentInstance.ProviderE.subscribe((provider: any) => {
      let INDEX = this.PROVIDERS.findIndex((prov: any) => prov.id == PROVIDER.id);
      if (INDEX != -1) {
        this.PROVIDERS[INDEX] = provider;
      }
    });
  }

  deleteProvider(PROVIDER: any) {
    const modalRef = this.modalService.open(DeleteProvidersComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.PROVIDER_SELECTED = PROVIDER;

    modalRef.componentInstance.ProviderD.subscribe(() => {
      let INDEX = this.PROVIDERS.findIndex((prov: any) => prov.id == PROVIDER.id);
      if (INDEX != -1) {
        this.PROVIDERS.splice(INDEX, 1);
      }
    });
  }
}