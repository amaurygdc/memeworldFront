import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { NotificationService } from './service/notification.service';
import { RestService } from './service/rest.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BigvaluePipe } from './bigvalue.pipe';
import { TimerPipe } from './timer.pipe';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BigvaluePipe,
    ModalComponent,
    TimerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
    ToastrModule.forRoot()
  ],
  providers: [RestService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
