import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; 
import ptBrLocale from '@fullcalendar/core/locales/pt-br'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit{
  events = [{
    title: 'Douglas | Cabelo e Barba',
    start: '2023-06-06 10:00:00',
    end: '2023-06-06 10:30:00',
    allDay: false,
    backgroundColor: 'black'
  }];
  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    height: '700px',
    locale: ptBrLocale,
    events: [],
    allDaySlot: false
  };

  ngOnInit(): void {
    this.events.push({
      title: 'Cliedy | Sombrancelha',
      start: '2023-06-06 12:00:00',
      end: '2023-06-06 13:30:00',
      allDay: false,
      backgroundColor: 'black'
    });
    this.calendarOptions.events = this.events;
  }

  ngAfterViewInit(): void {
    
  }



}
