import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { LoginComponent } from './pages/login/login.component';
import { StatisticAppComponent } from './pages/statistic-app/statistic-app.component';
const routes: Routes = [
  {
    path: 'contact', component: ContactAppComponent, canActivate: [AuthGuard]},
  { path: 'contact/edit', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: 'contact/edit/:id', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'statistic', component: StatisticAppComponent},
  { path: 'contact/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService }, runGuardsAndResolvers: "paramsChange" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
