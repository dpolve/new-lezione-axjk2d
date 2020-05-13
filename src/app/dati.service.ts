import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Regione, Provincia } from "./dati.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class DatiService {

  datiRegioni: Regione[] = [];

  datiProvince: Provincia[] = [];

  constructor(private http: HttpClient) {
    let risultatoPromesso: Promise<Regione[]> =
      this.http.get<Regione[]>('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json').toPromise();

    console.log(risultatoPromesso);
    risultatoPromesso.then(dati => {
      this.datiRegioni = dati;
      // ....
    });

    this.http.get<Provincia[]>('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')    .toPromise()
    .then(dati => this.datiProvince = dati);

  }

  getDatiRegioni(): Regione[] {
    return this.datiRegioni;
  }

  getDatiProvince(): Provincia[] {
    return this.datiProvince;
  }
}
