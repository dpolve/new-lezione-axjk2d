import { Component, OnInit, Input } from '@angular/core';
import { Provincia } from '../dati.model';

@Component({
  selector: 'app-tabella-province',
  templateUrl: './tabella-province.component.html',
  styleUrls: ['./tabella-province.component.css']
})
export class TabellaProvinceComponent implements OnInit {

  @Input() datiProvince: Provincia[] = [];
    constructor() {
    console.log('TabellaProvinceComponent.constructor', this.datiProvince);
  }

  ngOnInit() {
    console.log('TabellaProvinceComponent.ngOnInit', this.datiProvince);
  }

  ngOnDestroy() {
    console.log('TabellaProvinceComponent.ngOnDestroy', this.datiProvince);
  }

  ngOnChanges() {
    console.log('TabellaProvinceComponent.ngOnChanges');
  }

  ngDoCheck() {
    console.log('TabellaProvinceComponent.ngDoCheck');
  }


  ngAfterContentInit() {
    console.log('TabellaProvinceComponent.ngAfterContentInit');
  }


  ngAfterContentChecked() {
    console.log('TabellaProvinceComponent.ngAfterContentChecked');
  }


  ngAfterViewInit() {
    console.log('TabellaProvinceComponent.ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('TabellaProvinceComponent.ngAfterViewChecked');
  }

}