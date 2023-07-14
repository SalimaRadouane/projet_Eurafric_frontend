import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamCreService } from '../evenement.service';
import { paramcre } from '../ParamCre';
import { Router } from '@angular/router';



@Component({
  selector: 'app-paramcre-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class ParamCreDetailsComponent implements OnInit {
  paramCre: paramcre = new paramcre;
  id!: number

  constructor(
    private route: ActivatedRoute,
    private paramCreService: ParamCreService,private router: Router 
  ) { }

  ngOnInit(): void {
    this.getParamCreDetails();
    console.log(paramcre)
  }

  getParamCreDetails(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.paramCreService.getParamCreById(this.id)
        .subscribe((paramCre: paramcre) => {
          this.paramCre = paramCre;
          console.log(this.paramCre)
        });
    }
  }
  desactiver(id: number): void {
    this.paramCreService.desactiver(id)
      .subscribe(
        () => {
          console.log('ParamCre supprimé avec succès');
          // Refresh the page
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/event-details', id]);
          });
        },
        (error) => {
          console.log('Erreur lors de la suppression du ParamCre :', error);
        }
      );
  }
  
  
  activer(id :number){
    console.log();
  }
  
  
  
  
  
  
  
  
  
  
  update(id: number): void {
    this.router.navigate(['event-update', id]);

  }
  
}
