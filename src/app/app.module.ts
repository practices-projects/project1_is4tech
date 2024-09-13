import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
