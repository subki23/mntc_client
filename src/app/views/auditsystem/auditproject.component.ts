import { Component } from '@angular/core';

@Component({
  templateUrl: 'auditproject.component.html'
})
export class AuditProjectComponent {

  constructor() { 
  }
  
  // loadingIcon = {
  //   show_detail : false
  // }
  Data_audit_project = []

  ngOnInit() {
    var data = [
      {
        "auditId": 1,
        "folderPath": null,
        "code": null,
        "so": "C00460",
        "client": "ADIRA FINANCE",
        "projectName": "C00460 - Recovery Activity Tracking System (RATS) (2018)",
        "application": "RATS",
        "year": 2020,
        "project": "DEVELOPMENT",
        "mode": "INITIAL",
        "orderType": "ORDER",
        "status": "GO LIVE",
        "development": "DHIMAS -> RIDWAN ROBIN",
        "maintenance": "ANGGIT, YOSAFAT",
        "summary": "TIDAK LOLOS AUDIT, INFORMASI TERSEDIA <= 60% (Mandatory : 28% & Optional : 0% Catatan : APP: ?, DB: ?, Config: ?, BAST: ?",
        "needToArchive": null,
        "notes": null,
        "kpi": 28.0
      },
      {
        "auditId": 2,
        "folderPath": null,
        "code": null,
        "so": "C00461",
        "client": "ADIRA FINANCE",
        "projectName": "C00460 - Recovery Activity Tracking System (RATS) (2018)",
        "application": "RATS",
        "year": 2020,
        "project": "MAINTENANCE",
        "mode": "INITIAL",
        "orderType": "ORDER",
        "status": "GO LIVE",
        "development": "DHIMAS -> RIDWAN ROBIN",
        "maintenance": "ANGGIT, YOSAFAT",
        "summary": "TIDAK LOLOS AUDIT, INFORMASI TERSEDIA <= 60% (Mandatory : 28% & Optional : 0% Catatan : APP: ?, DB: ?, Config: ?, BAST: ?",
        "needToArchive": null,
        "notes": null,
        "kpi": 28.0
      }
    ]
    data.map((item)=>{
      item['show_detail'] = false
      this.Data_audit_project.push(item)
    })
  }

  Showdetail = (item:any) => {
    item.show_detail = !item.show_detail
    this.getDetail(item)
  }

  getDetail = (item:any) => {
    item["detail"] = {
      "auditId": 2,
      "folderPath": null,
      "code": null,
      "so": "C00461",
      "client": "ADIRA FINANCE",
      "projectName": "C00460 - Recovery Activity Tracking System (RATS) (2018)",
      "application": "RATS",
      "year": 2020,
      "project": "MAINTENANCE",
      "mode": "INITIAL",
      "orderType": "ORDER",
      "status": "GO LIVE",
      "development": "DHIMAS -> RIDWAN ROBIN",
      "maintenance": "ANGGIT, YOSAFAT",
      "summary": "TIDAK LOLOS AUDIT, INFORMASI TERSEDIA <= 60% (Mandatory : 28% & Optional : 0% Catatan : APP: ?, DB: ?, Config: ?, BAST: ?",
      "needToArchive": null,
      "notes": null,
      "kpi": 28.0,
      "app": false,
      "db": true,
      "contract": true,
      "devBrd": true,
      "devProposal": true,
      "devPp": true,
      "devFsd": true,
      "devDev": true,
      "devMom": true,
      "devUat": true,
      "devRtm": true,
      "devConfig": true,
      "devManual": true,
      "devBast": true,
      "mtcHandover": true,
      "mtcWi": true,
      "mtcIssue": true,
      "mtcHc": true,
      "mtcMr": true
    }
  }

}
