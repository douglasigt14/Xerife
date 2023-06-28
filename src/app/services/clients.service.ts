import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

   private data =[
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 8, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 9, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 10, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 11, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 12, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // adicione mais dados aqui, se necessário
  ];

  getData(page: number, pageSize: number): any[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  getTotalCount(): number {
    return this.data.length;
  }
}
