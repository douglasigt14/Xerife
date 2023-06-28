import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  private data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    // Adicione mais itens de exemplo aqui
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
