import { Component, OnInit, Input } from '@angular/core';
import { Regione } from '../dati.model';

@Component({
  selector: 'app-tabella-regioni',
  templateUrl: './tabella-regioni.component.html',
  styleUrls: ['./tabella-regioni.component.css']
})
export class TabellaRegioniComponent implements OnInit {

  @Input() datiRegioni: Regione[] = [];

  constructor() {
    console.log('TabellaRegioniComponent.constructor', this.datiRegioni);
  }

  ngOnInit() {
    console.log('TabellaRegioniComponent.ngOnInit', this.datiRegioni);
  }

  ngOnDestroy() {
    console.log('TabellaRegioniComponent.ngOnDestroy', this.datiRegioni);
  }

  ngOnChanges() {
    console.log('TabellaRegioniComponent.ngOnChanges');
  }

  ngDoCheck() {
    console.log('TabellaRegioniComponent.ngDoCheck');
  }


  ngAfterContentInit() {
    console.log('TabellaRegioniComponent.ngAfterContentInit');
  }


  ngAfterContentChecked() {
    console.log('TabellaRegioniComponent.ngAfterContentChecked');
  }


  ngAfterViewInit() {
    console.log('TabellaRegioniComponent.ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('TabellaRegioniComponent.ngAfterViewChecked');
  }


}