import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from 'app/home/home.component';
import {ResultComponent} from 'app/result/result.component';
import {SurveyPrimaryComponent} from 'app/survey/primary.component';
import {SurveyResolver} from 'app/survey/survey-resolver.service';
import {TermsViewComponent} from 'app/home/terms.component';
import {UserStatusComponent} from 'app/home/status.component';
import {UserStatusResolver} from 'app/home/status-resolver.service';
import {SuccessPageComponent} from 'app/survey/success-page/success-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'submission-confirmation',
    component: SuccessPageComponent
  },
  {
    path: 'prv',
    redirectTo: 'prv/survey'
  },
  {
    path: 'prv/survey',
    component: SurveyPrimaryComponent,
    resolve: {
      userInfo: UserStatusResolver,
      // to resolve survey json before rendering the component:
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Provincial Family Test',
      cache_name: 'primary',
      survey_path: 'assets/survey-primary.json',
    }
  },
  {
    path: 'result/:state',
    component: ResultComponent,
    data: {
      breadcrumb: 'Survey Results'
    }
  },
  {
    path: 'glossary-editor',
    redirectTo: 'prv/glossary-editor'
  },
  {
    path: 'survey-editor',
    redirectTo: 'prv/survey-editor'
  },
  {
    path: 'prv/status',
    component: UserStatusComponent,
    data: {
      breadcrumb: 'Status',
    }
  },
  {
    path: 'terms',
    component: TermsViewComponent,
    data: {
      breadcrumb: 'Terms and Conditions',
    }
  },
  {
    path: 'prv/terms',
    component: TermsViewComponent,
    data: {
      breadcrumb: 'Terms and Conditions',
    }
  },
  {
    path: 'sandbox',
    component: SurveyPrimaryComponent,
    resolve: {
      // survey: SurveyResolver,
    },
    data: {
      breadcrumb: 'Survey Sandbox',
      survey_path: 'assets/survey-sandbox.json',
      show_sidebar: true,
    }
  },
  {
    // wildcard route
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SurveyResolver]
})
export class AppRoutingModule {
}
