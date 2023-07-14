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
  suc!: number;

  constructor(
    private paramCreService: ParamCreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.newParamCre.id = this.id;
  }

  onSubmit() {
    this.update();
  }

  update(): void {
    this.paramCreService.updateParamCre(this.newParamCre)
      .subscribe(
        () => {
          this.suc=1;
          console.log('ParamCre mis à jour avec succès');
        },
        (error) => {
          console.log('Erreur lors de la mise à jour du ParamCre :', error);
        }
      );
  }
}
