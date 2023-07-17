import { Component } from '@angular/core';
import { paramcre } from '../ParamCre';
import { ParamCreService } from '../evenement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  newParamCre: paramcre = new paramcre();
  champsEnErreur: string[] = [];
  id!: number;
  showAlert: boolean = false;

  constructor(
    private paramCreService: ParamCreService,
    private route: ActivatedRoute,private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
this.getParamCreDetails();  }

  onSubmit() {


    window.alert('Modification successful!');

    this.update();
    
    this.router.navigate(['/event-details/'+this.id]);

  }
  getParamCreDetails(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.paramCreService.getParamCreById(this.id)
        .subscribe((paramCre: paramcre) => {
          this.newParamCre = paramCre;
          console.log(this.newParamCre)
        });
    }
  }
  update(): void {
    this.paramCreService.updateParamCre(this.newParamCre)
      .subscribe(
        () => {
          console.log('ParamCre mis à jour avec succès');
        },
        (error) => {
          console.log('Erreur lors de la mise à jour du ParamCre :', error);
        }
      );
  }
}
