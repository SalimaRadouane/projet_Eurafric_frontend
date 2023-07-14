import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    
    AppComponent,
    EvenementListComponent,
    EvenementAddComponent,
    ParamCreDetailsComponent,
    UpdateComponent,
    SearchComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
