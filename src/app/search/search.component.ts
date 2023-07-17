import { Component } from '@angular/core';
import { paramcre } from '../ParamCre';
import { ParamCreService } from '../evenement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  paramCreslist!: paramcre[];
  ParamCre:  paramcre = new paramcre();
  startDate: string = '';
  endDate: string = '';
  pageSize: number = 5; 
  currentPage: number = 1;
  totalItems: number = 0;
  totalPages: number[] = [];
  paginatedParamCres!: paramcre[];


  constructor(private paramCreService: ParamCreService, private router: Router) { 
  }

  onSubmit() {
    this.currentPage = 1;
    this.search();
  }

  search() {
    this.paramCreService.search(this.ParamCre, this.startDate, this.endDate).subscribe(
      (data: paramcre[]) => {
        this.paramCreslist = data;
        this.totalItems = data.length;
        this.calculateTotalPages();
        this.paginate();
        console.log(this.totalItems);
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la recherche :', error);
      }
    );
  }
  
  calculateTotalPages() {
    this.totalPages = [];
    const pageCount = Math.ceil(this.totalItems / this.pageSize);
    for (let i = 1; i <= pageCount; i++) {
      this.totalPages.push(i);
    }
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedParamCres = this.paramCreslist.slice(startIndex, endIndex);
  }
  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
      this.paginate();
    }
  }

}
