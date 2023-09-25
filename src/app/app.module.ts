import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HranalysisComponent } from './hranalysis/hranalysis.component';
import { ItJobSurveyComponent } from './it-job-survey/it-job-survey.component';
import { PizzaShopComponent } from './pizza-shop/pizza-shop.component';
import { SalesAnalyserComponent } from './sales-analyser/sales-analyser.component';
import { AdventureWorkComponent } from './adventure-work/adventure-work.component';
import { TestChildComponent } from './test-child/test-child.component';
import { FinancialMarketComponent } from './financial-market/financial-market.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsComponent,
    HranalysisComponent,
    ItJobSurveyComponent,
    PizzaShopComponent,
    SalesAnalyserComponent,
    AdventureWorkComponent,
    TestChildComponent,
    FinancialMarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProjectsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
