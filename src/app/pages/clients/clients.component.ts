import { Component, ViewChild } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

  export class ClientsComponent {

    constructor(private breakpointObserver: BreakpointObserver, private clientsSerive: ClientsService) {}
    
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource:any = [];
    items: any[] = [];
    totalCount: number = 0;
    pageSize: number = 5;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(() => {
        return [
          { title: 'Agenda', cols: 2 }
        ];
      })
    );
  
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.loadData(1);
    }

    loadData(page: number):void {
      this.items = this.clientsSerive.getData(page, this.pageSize);
      this.totalCount = this.clientsSerive.getTotalCount();
      this.dataSource = new MatTableDataSource<any>(this.items);

      this.dataSource.paginator = this.paginator;
    }


    onPageChange(event: PageEvent) {
      const currentPage = event.pageIndex + 1;
      this.pageSize = event.pageSize;
      this.loadData(currentPage);
    }
  }
  
