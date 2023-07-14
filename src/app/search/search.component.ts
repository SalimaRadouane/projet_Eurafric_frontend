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
  
  constructor(private paramCreService: ParamCreService,private router: Router ) { 
   
  }

  onSubmit(){
    
    this.search();
    console.log("wert")
  }

  search() {
    this.paramCreService.search(this.ParamCre).subscribe(
      (data: paramcre[]) => {
        this.paramCreslist = data;
        console.log(data);
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la recherche :', error);
      }
    );
  }
  
  
}
