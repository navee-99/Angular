import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ApprovalComponent } from './Approval/Approval.component';
import { DieInspectionDataIssuesStaticDynamicComponent } from './die-inspection-data-issues-static-dynamic/die-inspection-data-issues-static-dynamic.component';
const routes: Routes = [
{ path: 'newChecklist', component: NewCheckList },
{ path: '', component: ApprovalComponent },
{ path: 'approval', component: ApprovalComponent },
{ path: 'additionalApproval', component: AdditionalApprovalComponent },
{ path: 'coverSheet', component: CoverSheetComponent },
{ path: 'generalInspection', component: GeneralInspectionComponent },
{ path: 'dieInspection', component: DieInspectionComponent },
{ path: 'userPreferences', component: UserPreferencesComponent },
{ path: 'registerPage', component: RegisterComponent },
{ path: 'dieRecipe', component: DieRecipeComponent },
{ path: 'test10form', component: Test10FormComponent },
{ path: 'masterData', component: MasterDataComponent },
{ path: 'test12form', component: Test12FormComponent },
{ path: 'uploadScreen', component: UploadScreenComponent },
{ path: 'dataIssues', component: DataIssuesComponent },
{ path: 'pressWindow', component: PressWindowComponent },
{ path: 'static&Dynamic', component: StaticDynamicComponent },
{ path: 'fiveChecklist', component: FiveChecklistComponent },
{
  path:'manu',
  component:MenubarComponent
},
{path:'dieInspectionDataIssues',component:DieInspectionDataIssuesStaticDynamicComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
