import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementListComponent } from './evenement-list/evenement-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EvenementAddComponent } from './evenement-add/evenement-add.component';
import { FormsModule } from '@angular/forms';
import { ParamCreDetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // or NoopAnimationsModule

import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    
    AppComponent,
    EvenementListComponent,
    EvenementAddComponent,
    ParamCreDetailsComponent,
    UpdateComponent,
    SearchComponent,
    InfoComponent,   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  ,MatPaginatorModule,
    MatSnackBarModule,BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
