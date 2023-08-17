import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CalanderService {
  Events: any[] = [];
  constructor(private http: HttpClient) { }
  cal(){
    return this.http.get<any>('https://evramedia.com/event.php').subscribe((res: any) => {
      this.Events.push(res);
      console.log(this.Events);
    });
      
  }
  getlogs():Observable<any>{
    return this.http.get<any>('http://localhost/api/cal_logs.php');
  }
 
  
}
