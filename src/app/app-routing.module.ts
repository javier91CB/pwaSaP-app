import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationComponent } from './components/notification/notification.component';
import { OrdersComponent } from './components/orders/orders.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/index';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'notification', component: NotificationComponent , canActivate: [AuthGuard]},
    { path: 'orders', component: OrdersComponent , canActivate: [AuthGuard]},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},

    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule],
//     providers: []
// })

// export class AppRoutingModule {}
export const AppRoutingModule = RouterModule.forRoot(routes);
