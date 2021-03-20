import { DatabaseServiceService } from './../../Services/database-service.service';
import { VisitorForm } from './../../../Models/VisitorForm';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-visit-form',
  templateUrl: './visit-form.page.html',
  styleUrls: ['./visit-form.page.scss'],
})
export class VisitFormPage implements OnInit {

  private visitorFormInstance:VisitorForm;
  public currentDate;

  constructor(private datePipe:DatePipe,private dbService:DatabaseServiceService) {}

  ngOnInit() {
    let myDate = new Date();
    this.currentDate = this.datePipe.transform(myDate,'yyyy-MM-dd');
  }

  submitForm(visitorForm){
    console.log(visitorForm);
    this.visitorFormInstance = new VisitorForm();
    this.visitorFormInstance.visitorName = visitorForm.value.visitorName;
    this.visitorFormInstance.visitorEmail = visitorForm.value.visitorEmail;
    this.visitorFormInstance.visitType = visitorForm.value.visitType;
    this.visitorFormInstance.personToVisit = visitorForm.value.personToVisit;
    this.visitorFormInstance.dateOfVisit = this.currentDate;
    //console.log('current date ==> ', visitorForm.value.entryTime.split('T')[1].split('.')[0]);
    this.visitorFormInstance.entryTime = visitorForm.value.entryTime.split('T')[1].split('.')[0];
    this.visitorFormInstance.exitTime = visitorForm.value.exitTime.split('T')[1].split('.')[0];

    console.log('visitor form instance : ',this.visitorFormInstance);
    this.dbService.insertVisit(this.visitorFormInstance);
    visitorForm.resetForm();
  }
}
