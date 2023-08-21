import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {AccordionModule} from 'primeng/accordion';
import { AppComponent } from './app.component';
import { ApprovalComponent } from './Approval/Approval.component';
import { AdditionalApprovalComponent } from './Additional-Approval/Additional-Approval.component';
import { CoverSheetComponent } from './Cover-Sheet/Cover-Sheet.component';
import { GeneralInspectionComponent } from './General-Inspection/General-Inspection.component';
import { DieInspectionComponent } from './Die-Inspection/Die-Inspection.component';
import { UserPreferencesComponent } from './User-preferences/User-preferences.component';
import { RegisterComponent } from './Register/Register.component';
import { DieRecipeComponent } from './Die-Recipe/Die-Recipe.component';
import { Test10FormComponent } from './test10-form/test10-form.component';
import { MasterDataComponent } from './Master-Data/Master-Data.component';
import { Test12FormComponent } from './test12-form/test12-form.component';
import { UploadScreenComponent } from './Upload-Screen/Upload-Screen.component';
import { DataIssuesComponent } from './Data-Issues/Data-Issues.component';
import { PressWindowComponent } from './Press-Window/Press-Window.component';
import { StaticDynamicComponent } from './Static-Dynamic/Static-Dynamic.component';
import { FiveChecklistComponent } from './Five-Checklist/Five-Checklist.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NewCheckList } from './New-CheckList/New-CheckList.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenuItem} from 'primeng/api';
import {DropdownModule} from 'primeng/dropdown';
import {TreeSelectModule} from 'primeng/treeselect';
import {MultiSelectModule} from 'primeng/multiselect';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import{DialogModule} from 'primeng/dialog'
import {ButtonModule } from 'primeng/button';
import { DieInspectionDataIssuesStaticDynamicComponent } from './die-inspection-data-issues-static-dynamic/die-inspection-data-issues-static-dynamic.component';



@NgModule({
  declarations: [
    AppComponent,
    NewCheckList,
    ApprovalComponent,
    AdditionalApprovalComponent,
    CoverSheetComponent,
    GeneralInspectionComponent,
    DieInspectionComponent,
    UserPreferencesComponent,
    RegisterComponent,
    DieRecipeComponent,
    Test10FormComponent,
    MasterDataComponent,
    Test12FormComponent,
    UploadScreenComponent,
    DataIssuesComponent,
    PressWindowComponent,
    StaticDynamicComponent,
    FiveChecklistComponent,
    MenubarComponent,
    DieInspectionDataIssuesStaticDynamicComponent
   

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AccordionModule,
    DropdownModule,
    TreeSelectModule,
    MultiSelectModule,
    MDBBootstrapModule.forRoot(),
    DialogModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
