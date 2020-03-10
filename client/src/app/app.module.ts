import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SummaryComponent } from './summary/summary.component';
import { FinalPageComponent } from './final-page/final-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CandidateRegistrationComponent } from './candidate-registration/candidate-registration.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionnaireComponent,
    SummaryComponent,
    FinalPageComponent,
    ResultPageComponent,
    AdminHomeComponent,
    CandidateRegistrationComponent,
    QuestionBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
