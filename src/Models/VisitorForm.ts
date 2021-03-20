import { Time } from '@angular/common';

export class VisitorForm{
  visitorName:string;
  visitorEmail:string;
  visitType:string;
  personToVisit:string;
  dateOfVisit:Date;
  entryTime:Time;
  exitTime:Time;

  constructor(){

  }
}
