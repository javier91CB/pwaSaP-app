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
import { LoginComponent } from './components/login/login.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AlertComponent } from './components/directives/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, fakeBackendProvider } from './components/helpers/index';
import { AuthenticationService, AlertService, ToasterService } from './service/index';
import { AuthGuard } from './components/guards/index';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { LoadItemComponent } from './components/load-item/load-item/load-item.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NotificationComponent,
    OrdersComponent,
    NavmenuComponent,
    ProfileComponent,
    AlertComponent,
    LoadItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CustomerDataService,
    HistoricalDataService,
    OrdersDataService,
    OrdersProductDataService,
    ProductDataService,
    ProviderDataService,
    AlertService,
    AuthGuard,
    AuthenticationService,
    ToasterService,
    UserDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
    // },
    // fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }


