import { Component } from '@angular/core';
import { paramcre } from '../ParamCre';
import { ParamCreService } from '../evenement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

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
  codeDomaineOptions: string[] = [];
  codeApplicationOptions: string[] = [];
  codeEvenementOptions: string[] = [];
  codeStructureOptions: string[] = [];
  codeEmetteurOptions: string[] = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  currentStep = 1;


  constructor(
    private paramCreService: ParamCreService,
    private route: ActivatedRoute,private router: Router,private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
this.getParamCreDetails();  
this.paramCreService.getCodeDomaines()
.subscribe(
  (codeDomaines: string[]) => this.codeDomaineOptions = codeDomaines,
  (error) => console.log(error)
);
this.paramCreService.getcodeApplication()
.subscribe(
  (codeApplication: string[]) => this.codeApplicationOptions = codeApplication,
  (error) => console.log(error)
);


this.paramCreService.getcodeStructure()
.subscribe(
  (codeStructure: string[]) => this.codeStructureOptions = codeStructure,
  (error) => console.log(error)
);

this.paramCreService.getcodeEvenement()
.subscribe(
  (codeEvenement: string[]) => this.codeEvenementOptions = codeEvenement,
  (error) => console.log(error)
);


this.paramCreService.getcodeEmetteur()
.subscribe(
  (codeEmetteur: string[]) => this.codeEmetteurOptions = codeEmetteur,
  (error) => console.log(error)
);
}
private showSuccessSnackbar(message: string): void {
  this.snackBar.open(message, 'Fermer  ', {
    duration: 5000, // Duration in milliseconds (5 seconds in this case)
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
  });
}

  onSubmit() {


    this.showSuccessSnackbar('Modification réussie !');

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
  goToNextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
  goToPreviousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
