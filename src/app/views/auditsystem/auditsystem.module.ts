import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditProjectComponent } from './auditproject.component';
import { AuditProjectUploadComponent } from './auditprojectupload.component';

// Components Routing
import { AuditsytemRoutingModule } from './auditsystem-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuditsytemRoutingModule
  ],
  declarations: [ 
    AuditProjectComponent,
    AuditProjectUploadComponent
  ]
})
export class AuditSystemModule { }
