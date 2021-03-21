import { MemberReadComponent } from './component/members-form/member-read/member-read.component';
import { MemberDeleteComponent } from './component/members-form/member-delete/member-delete.component';
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
import { MemberUpdateComponent } from './component/members-form/member-update/member-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './pages/home/home.component';
import { NgxMaskModule } from 'ngx-mask';
import { MemberCreateMobileComponent } from './component/mobile/member-create-mobile/member-create-mobile.component';
import { FormTableComponent } from './pages/form-table/form-table.component';
import { MobileHomeComponent } from './component/mobile/mobile-home/mobile-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MemberCreateComponent,
    MembersTableComponent,
    MemberDeleteComponent,
    MemberReadComponent,
    MemberUpdateComponent,
    HomeComponent,
    MemberCreateMobileComponent,
    FormTableComponent,
    MobileHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgxMaskModule.forRoot()

  ],
  providers: [ MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
