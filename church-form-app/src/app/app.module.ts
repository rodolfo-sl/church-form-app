import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { MembersFormComponent } from './component/members-form/members-form.component';
import { MembersTableComponent } from './component/members-table/members-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MembersFormComponent,
    MembersTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
