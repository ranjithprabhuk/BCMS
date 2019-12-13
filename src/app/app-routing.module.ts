import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () => import(`./modules/authentication/authentication.module`)
      .then(mod => mod.AuthenticationModule)
  },
  {
    path: 'campaign',
    loadChildren: () => import(`./modules/campaign/campaign.module`)
      .then(mod => mod.CampaignModule)
  },
  {
    path: 'template',
    loadChildren: () => import(`./modules/template/template.module`)
      .then(mod => mod.TemplateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
