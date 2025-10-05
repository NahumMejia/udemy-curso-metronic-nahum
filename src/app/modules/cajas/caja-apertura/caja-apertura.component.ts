import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CajaService } from '../service/caja.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-caja-apertura',
  templateUrl: './caja-apertura.component.html',
  styleUrls: ['./caja-apertura.component.scss']
})
export class CajaAperturaComponent {

  @Input() caja:any;
  amount_initial:number = 0;
  isLoading:any;

  @Output() caja_apertura: EventEmitter<any> = new EventEmitter();

  constructor(
    public modal: NgbActiveModal,
    public cajaService: CajaService,
    public toast: ToastrService,
  ) {
    
  }

ngOnInit(): void {
  if (this.caja && this.caja.amount !== undefined) {
    this.amount_initial = this.caja.amount;
  } else {
    this.toast.error("Error", "No se recibió la información de la caja.");
    this.modal.dismiss();
  }
}


apertura(){
  if (!this.caja || !this.caja.id) {
    this.toast.error("Error", "No se puede aperturar porque la caja no está definida.");
    return;
  }

  let data = {
    caja_id: this.caja.id,
    amount_initial: this.amount_initial,
  };

  this.cajaService.aperturaCaja(data).subscribe((resp:any) => {
    console.log(resp);
    this.toast.success("Éxito", "La caja " + this.caja.sucursale?.name + " se aperturó correctamente");
    this.modal.close();
    this.caja_apertura.emit(resp);
  });
}

}
