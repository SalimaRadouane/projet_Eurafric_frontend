import { Component } from '@angular/core';
import { paramcre } from '../ParamCre';
import { ParamCreService } from '../evenement.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenement-add',
  templateUrl: './evenement-add.component.html',
  styleUrls: ['./evenement-add.component.css']
})
export class EvenementAddComponent {
  currentStep = 1;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  newParamCre: paramcre = new paramcre();
  champsEnErreur: string[] = [];
  codeEvenementOptions: string[] = [];


  suc!: number;
  constructor(private paramCreService: ParamCreService,private snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    this.paramCreService.getcodeEvenement()
    .subscribe(
      (codeEvenement: string[]) => this.codeEvenementOptions = codeEvenement,
      (error) => console.log(error)
    );
  } 
  isCodeEvenementValid(): boolean {
      return this.codeEvenementOptions.includes(this.newParamCre.codeEvenement);
    }
  onSubmit(){
  if (this.isCodeEvenementValid()) {
    this.showSuccessSnackbar("code Événement n'est pas valide! ");
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/add']);
    });
  }
else{
  this.addParamCre();
    this.showSuccessSnackbar('Ajout réussi ! ');
    this.router.navigate(['/list/']);
}
   

    


  }
  private showSuccessSnackbar(message: string): void {
    this.snackBar.open(message, 'Fermer    ', {
      duration: 5000, // Duration in milliseconds (5 seconds in this case)
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  addParamCre(): void {
    this.paramCreService.addParamCre(this.newParamCre)
      .subscribe(() => {
        this.newParamCre = new paramcre();
this.suc=1;
      });
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
