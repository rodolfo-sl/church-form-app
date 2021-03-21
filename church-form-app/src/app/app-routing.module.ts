import { MobileHomeComponent } from './component/mobile/mobile-home/mobile-home.component';
import { FormTableComponent } from './pages/form-table/form-table.component';
import { MemberCreateMobileComponent } from './component/mobile/member-create-mobile/member-create-mobile.component';
import { MemberReadComponent } from './component/members-form/member-read/member-read.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "member-list", component: MemberReadComponent},
  {path: "member-creat-mobile-home", component: MobileHomeComponent},
  {path: "member-creat-form-teble", component: FormTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
