import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationComponent } from './components/notification/notification.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserDataService } from './service/user/user-data.service';
import { CustomerDataService } from './service/customer/customer-data.service';
import { HistoricalDataService } from './service/historical/historical-data.service';
import { OrdersDataService } from './service/orders/orders-data.service';
import { OrdersProductDataService } from './service/orders-product/orders-product-data.service';
import { ProductDataService } from './service/product/product-data.service';
import { ProviderDataService } from './service/provider/provider-data.service';
import { LoginModule } from './components/login/login.module';
import { NavmenuComponent } from './components/navmenu/navmenu.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    // LoginComponent,
    DashboardComponent,
    NotificationComponent,
    OrdersComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // LoginModule,
    HttpModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CustomerDataService,
    HistoricalDataService,
    OrdersDataService,
    OrdersProductDataService,
    ProductDataService,
    ProviderDataService,
    UserDataService
],
  bootstrap: [AppComponent]
})
export class AppModule { }


