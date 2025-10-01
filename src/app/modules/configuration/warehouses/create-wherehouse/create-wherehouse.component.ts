import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WarehouseService } from '../service/warehouse.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-wherehouse',
  templateUrl: './create-wherehouse.component.html',
  styleUrls: ['./create-wherehouse.component.scss']
})
export class CreateWherehouseComponent {

  @Output() WareHouseC: EventEmitter<any> = new EventEmitter();
  @Input() SUCURSALES: any = [];
  
  name: string = '';
  address: string = '';
  sucursale_id: string = '';
  isLoading: any;

  constructor(
    public modal: NgbActiveModal,
    public wareHouseService: WarehouseService,
    public toast: ToastrService,
  ) {}

  ngOnInit(): void {
    console.log('Sucursales recibidas:', this.SUCURSALES);
    
    // Si no hay sucursales, cargarlas
    if (!this.SUCURSALES || this.SUCURSALES.length === 0) {
      this.loadSucursales();
    }
  }

  loadSucursales() {
    this.wareHouseService.listWarehouses(1, '').subscribe((resp: any) => {
      this.SUCURSALES = resp.sucursales;
      console.log('Sucursales cargadas:', this.SUCURSALES);
    });
  }

  store() {
    if (!this.name) {
      this.toast.error("Validación", "El nombre del almacén es requerido");
      return;
    }

    // Hacer la sucursal opcional (quitar validación si es opcional)
    // if (!this.sucursale_id) {
    //   this.toast.error("Validación", "La sucursal es requerida");
    //   return;
    // }

    let data = {
      name: this.name,
      address: this.address,
      sucursale_id: this.sucursale_id || null,
    };

    this.wareHouseService.registerWarehouse(data).subscribe((resp: any) => {
      console.log(resp);
      if (resp.message == 403) {
        this.toast.error("Validación", resp.message_text);
      } else {
        this.toast.success("Éxito", "El almacén se registró correctamente");
        this.WareHouseC.emit(resp.warehouse);
        this.modal.close();
      }
    });
  }
}