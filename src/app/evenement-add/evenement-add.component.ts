import { Component } from '@angular/core';
import { paramcre } from '../ParamCre';
import { ParamCreService } from '../evenement.service';

@Component({
  selector: 'app-evenement-add',
  templateUrl: './evenement-add.component.html',
  styleUrls: ['./evenement-add.component.css']
})
export class EvenementAddComponent {
  newParamCre: paramcre = new paramcre();
  champsEnErreur: string[] = [];
  suc!: number;
  constructor(private paramCreService: ParamCreService) { }

  ngOnInit(): void {
  }
  onSubmit(){
  



    this.addParamCre();
  }
  addParamCre(): void {
    this.paramCreService.addParamCre(this.newParamCre)
      .subscribe(() => {
        this.newParamCre = new paramcre();
this.suc=1;
      });
  }
}
