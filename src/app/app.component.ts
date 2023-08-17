import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
// import { HttpClient } from '@angular/common/http';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { CalanderService } from 'src/app/calander.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Events: any[] = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  

  obj = [{ title: 'event 1', date: '2023-08-01' },{ title: 'hellow chck po  1', date: '2023-08-02' }];

  
  title = 'angular-calednar-event';
logs:any=[]
  constructor(private api : CalanderService,
     private http :HttpClient
    ) {}

  onDateClick(res: any) {
    // alert('Clicked on date : ' + res.dateStr);
    console.log(res.dateStr);
    // console.log(res);

  }
  ngOnInit() {
    this.get_cal_logs();
    setTimeout(() => {
      this.cal1();
    //   return this.httpClient
    //     .get('https://evramedia.com/event.php')
    //     .subscribe((res: any) => {
    //       this.Events.push(res);
    //       console.log(this.Events);
    //     });
   }, 2200);

    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.Events,
        dateClick : this.onDateClick.bind(this),
  
      };
    }, 2500);


  }

  cal1(){
    this.http.get<any>('http://localhost/api/event.php').subscribe((res: any) => {
      this.Events.push(res);
      console.log(this.Events);
    });
  }

  test(){
    // console.log(this.Events);

  }

  get_cal_logs(){
    this.api.getlogs().subscribe({
      next:(data) =>{
        console.log(data);
        this.logs = data;
       
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{

   
      }
    })
   
  }
}
