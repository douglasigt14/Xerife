import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'xerife';
  is_auth:boolean = true; 
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(() => {
      return [
        { title: 'Agenda', cols: 2 }
      ];
    })
  );

  ngOnInit(): void {
    this.authService.getIsAuth().subscribe(value => {
      this.is_auth = value;
    })
  }
  

  constructor(private breakpointObserver: BreakpointObserver,private authService: AuthService) {}
}
