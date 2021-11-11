import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditProjectComponent } from './auditproject.component';
import { AuditProjectUploadComponent } from './auditprojectupload.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Audit System'
    },
    children: [
      {
        path: '',
        redirectTo: 'audit-project'
      },
      {
        path: 'audit-project',
        component: AuditProjectComponent,
        data: {
          title: 'Audit Project'
        }
      },
      {
        path: 'audit-project-upload',
        component: AuditProjectUploadComponent,
        data: {
          title: 'Audit Project Upload'
        }
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditsytemRoutingModule {}
