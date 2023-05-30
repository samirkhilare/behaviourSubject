import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any[] {
    if (!data || !searchTerm) {
      return data;
    }

    searchTerm = searchTerm.toLowerCase();

    return data.filter(item => {
      // Modify the condition based on your search requirements
      return item.name.toLowerCase().includes(searchTerm) ||
             item.email.toLowerCase().includes(searchTerm) ||
             item.address.toLowerCase().includes(searchTerm);
    });
  }
}
