import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);
  private adm4Subject = new BehaviorSubject<string>('31.71.03.1001');

  adm4$ = this.adm4Subject.asObservable();

  setAdm4(adm4: string): void {
    this.adm4Subject.next(adm4);
  }

  getCurrentAdm4(): string {
    return this.adm4Subject.value;
  }

  // getWeather(adm4: string): Observable<any> {
  //   const apiUrl = `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${adm4}`;

  //   return this.http.get(apiUrl);
  // }

  getWeather(adm4: string) {
    return this.http.get<any>('assets/data/mock.json');
  }
}
