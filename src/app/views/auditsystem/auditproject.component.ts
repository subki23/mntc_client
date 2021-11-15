import { Component } from '@angular/core';

@Component({
  templateUrl: 'auditproject.component.html'
})
export class AuditProjectComponent {

  constructor() { 
  }
  
  loadingIcon = {
    show_detail : false
  }
  Data_audit_project = []

  ngOnInit() {
    this.Data_audit_project.push(
      {
        ID: 1,
        SO: "C00460",
        CLIENT: "ADIRA FINANCE",
        PROJECT_NAME: "C00460 - Recovery Activity Tracking System (RATS) (2018)",
        APPLICATION: "RATS",
        YEAR: "2018",
        PROJECT: "DEVELOPMENT",
        MODE: "INITIAL",
        ORDER_TYPE: "ORDER",
        STATUS: "GO LIVE",
        DEVELOPMENT: "DHIMAS -> RIDWAN ROBIN",
        MAINTENANCE: "ANGGIT, YOSAFAT",
        SUMMARY: "TIDAK LOLOS AUDIT, INFORMASI TERSEDIA <= 60% (Mandatory : 28% & Optional : 0% Catatan : APP: ?, DB: ?, Config: ?, BAST: ?",
        KPI: "28%"
      }
    )
    this.Data_audit_project.push(
      {
        ID: 2,
        SO: "C00461",
        CLIENT: "ADIRA FINANCE",
        PROJECT_NAME: "C00460 - Recovery Activity Tracking System (RATS) (2018)",
        APPLICATION: "RATS",
        YEAR: "2018",
        PROJECT: "MAINTENANCE",
        MODE: "INITIAL",
        ORDER_TYPE: "ORDER",
        STATUS: "GO LIVE",
        DEVELOPMENT: "DHIMAS -> RIDWAN ROBIN",
        MAINTENANCE: "ANGGIT, YOSAFAT",
        SUMMARY: "TIDAK LOLOS AUDIT, INFORMASI TERSEDIA <= 60% (Mandatory : 28% & Optional : 0% Catatan : APP: ?, DB: ?, Config: ?, BAST: ?",
        KPI: "28%"
      }
    )
  }

  Showdetail = () => {
    this.loadingIcon.show_detail = !this.loadingIcon.show_detail
  }

}
