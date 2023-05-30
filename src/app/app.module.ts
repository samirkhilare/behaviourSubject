import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ExpandtableComponent } from './expandtable/expandtable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from 'src/comps/comp1/comp1.component';
import { Comp2Component } from 'src/comps/comp2/comp2.component';
import { Comp3Component } from 'src/comps/comp3/comp3.component';
import { Comp4Component } from 'src/comps/comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandtableComponent,
    SearchPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    HeaderComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
