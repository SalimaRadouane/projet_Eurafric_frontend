import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { paramcre } from './ParamCre';

@Injectable({
  providedIn: 'root'
})
export class ParamCreService {
  private apiUrl = 'http://localhost:8080/paramcre';

  constructor(private http: HttpClient) {}

  getParamCres(): Observable<paramcre[]> {
    return this.http.get<paramcre[]>(`${this.apiUrl}/all`);
  }
  getPaginatedEntities(pageNumber: number, pageSize: number): Observable<paramcre[]> {
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString())

    return this.http.get<paramcre[]>(`${this.apiUrl}/donnees`, { params });
  }
  

  addParamCre(paramCre: paramcre): Observable<paramcre> {
    
    return this.http.post<paramcre>(`${this.apiUrl}/add`, paramCre);
  }

  getParamCreById(id: number): Observable<paramcre> {
    return this.http.get<paramcre>(`${this.apiUrl}/${id}`);
  }

  updateParamCre(paramCre: paramcre): Observable<paramcre> {
    console.log(paramCre);
    return this.http.put<paramcre>(`${this.apiUrl}/update`, paramCre);
  }
  

  desactiver(id: number): Observable<void> {
    console.log(id)
    return this.http.delete<void>(`${this.apiUrl}/desactiver/${id}`);
  }
  avtiver(id: number): Observable<void> {
    console.log(id)
    return this.http.delete<void>(`${this.apiUrl}/activer/${id}`);
  }
  
search(paramCre: paramcre): Observable<paramcre[]> {
  

  return this.http.post<paramcre[]>(`${this.apiUrl}/searchCRE`,  paramCre);
}
  
}
