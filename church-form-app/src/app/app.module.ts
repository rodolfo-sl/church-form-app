import { MemberService } from './component/members-form/member.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { MemberCreateComponent } from './component/members-form/member-create/member-create.component';
import { MembersTableComponent } from './component/members-table/members-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberDeleteComponent } from './members-form/member-delete/member-delete.component';
import { MemberReadComponent } from './member-read/member-read.component';
import { MemberUpdateComponent } from './component/members-form/member-update/member-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MemberCreateComponent,
    MembersTableComponent,
    MemberDeleteComponent,
    MemberReadComponent,
    MemberUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
