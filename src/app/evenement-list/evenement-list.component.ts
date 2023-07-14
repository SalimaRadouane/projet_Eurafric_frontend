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
  paramCres!: paramcre[];

  constructor(private paramCreService: ParamCreService,private router: Router ) { }

  ngOnInit() {
    this.getParamCres();
  }

  getParamCres() {
    this.paramCreService.getParamCres()
      .subscribe((data: paramcre[]) => {
        this.paramCres = data;
        console.log(data)
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
}
