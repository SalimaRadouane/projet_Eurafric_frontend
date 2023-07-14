import { Component, OnInit } from '@angular/core';
import { ParamCreService } from '../evenement.service';
import { paramcre } from '../ParamCre';
import { Router } from '@angular/router';
@Component({
  selector: 'app-evenement-list',
  templateUrl: './evenement-list.component.html',
  styleUrls: ['./evenement-list.component.css']
})
export class EvenementListComponent implements OnInit {
  paramCres: paramcre[] = []; ;
  currentPage = 0;
  pageSize = 10;
  
  constructor(private paramCreService: ParamCreService,private router: Router ) { }

  ngOnInit() {
    this.getPaginatedData();

    console.log('ParamCres:', this.paramCres);
  }

  getPaginatedData(): void {
  
  
    this.paramCreService.getPaginatedEntities(this.currentPage, this.pageSize)
      .subscribe((data: any) => {
        this.paramCres = data.content;
        console.log(data);
        console.log('ParamCres:', this.paramCres);

      });
  }
  
  
  
  desactiver(id: number): void {
    this.paramCreService.desactiver(id)
      .subscribe(
        () => {
          console.log('ParamCre supprimé avec succès');
          // Refresh the page
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/list']);
          });
        },
        (error) => {
          console.log('Erreur lors de la suppression du ParamCre :', error);
        }
      );
  }
  
  
  activer(id :number){
    this.paramCreService.avtiver(id)
    .subscribe(
      () => {
        console.log('ParamCre activer avec succès');
        // Refresh the page
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/list']);
        });
      },
      (error) => {
        console.log('Erreur lors de l activation du ParamCre :', error);
      }
    );
  }
  
  
  
  details(id: number){
    this.router.navigate(['event-details', id]);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.getPaginatedData();
  }
  
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPaginatedData();
    }
  }
  
  goToNextPage(): void {
    const totalPages = this.getTotalPages();
    const lastPage = totalPages[totalPages.length - 1];
    if (this.currentPage < lastPage) {
      this.currentPage++;
      this.getPaginatedData();
    }
  }
  
  
  
  getTotalPages(): number[] {
    const totalElements = 91; 
    const totalPages = Math.ceil(totalElements / this.pageSize);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }
  
  
}
