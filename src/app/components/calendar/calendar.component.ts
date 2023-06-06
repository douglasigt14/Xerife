import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; 
import ptBrLocale from '@fullcalendar/core/locales/pt-br'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    height: '800px',
    locale: ptBrLocale,
    allDaySlot: false
  };

  ngOnInit(): void {
    
  }

}
