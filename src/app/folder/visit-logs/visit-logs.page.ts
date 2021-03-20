import { VisitorForm } from './../../../Models/VisitorForm';
import { DatabaseServiceService } from './../../Services/database-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-logs',
  templateUrl: './visit-logs.page.html',
  styleUrls: ['./visit-logs.page.scss'],
})
export class VisitLogsPage implements OnInit {

  public visits:VisitorForm[] = new Array();

  constructor(private dbService:DatabaseServiceService) { }

  ngOnInit() {
    // this.dbService.getVisits().subscribe((data)=>{
    //   this.visits = data;
    //   console.log('visits from db:',this.visits);
    // })
    this.dbService.loadVisits().then(data=>{
      this.visits = data;
    })
  }

}
