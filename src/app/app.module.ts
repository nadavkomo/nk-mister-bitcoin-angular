import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { LoginComponent } from './pages/login/login.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { StatisticAppComponent } from './pages/statistic-app/statistic-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactAppComponent,
    HomePageComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    AppFooterComponent,
    UserPreviewComponent,
    LoginComponent,
    MoveListComponent,
    MovePreviewComponent,
    TransferFundComponent,
    StatisticAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
