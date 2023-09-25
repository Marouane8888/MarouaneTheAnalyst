
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DataApiComponent } from './data-api/data-api.component';
import { HranalysisComponent } from './hranalysis/hranalysis.component';
import { ItJobSurveyComponent } from './it-job-survey/it-job-survey.component';
import { SalesAnalyserComponent } from './sales-analyser/sales-analyser.component';
import { PizzaShopComponent } from './pizza-shop/pizza-shop.component';
import { AdventureWorkComponent } from './adventure-work/adventure-work.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestChildComponent } from './test-child/test-child.component';
import { FinancialMarketComponent } from './financial-market/financial-market.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'hranalys', component:HranalysisComponent},
  {path:'itjob', component:ItJobSurveyComponent},
  {path:'sales', component:SalesAnalyserComponent},
  {path:'pizza', component:PizzaShopComponent},
  {path:'advwrok', component:AdventureWorkComponent},
  {path:'projects', component:ProjectsComponent},
  {path:'test', component:TestChildComponent},
  {path:'api', component:DataApiComponent},
  {path:'finance', component:FinancialMarketComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
