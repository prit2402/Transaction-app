import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanComponent } from './pages/scan/scan.component';
import { ArhivesComponent } from './pages/arhives/arhives.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {path:'',component:ScanComponent},
  {path:'arhives',component:ArhivesComponent},
  {path:'list',component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
