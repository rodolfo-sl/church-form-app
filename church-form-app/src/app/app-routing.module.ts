import { MemberCreateMobileComponent } from './component/mobile/member-create-mobile/member-create-mobile.component';
import { MemberReadComponent } from './component/members-form/member-read/member-read.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "member-list", component: MemberReadComponent},
  {path: "member-creat-mobile", component: MemberCreateMobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
