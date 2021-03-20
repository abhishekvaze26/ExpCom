import { DatabaseServiceService } from './Services/database-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Visit Form', url: 'visit-form', icon: 'mail' },
    { title: 'Visit Logs', url: 'visit-logs', icon: 'mail' },
    { title: 'News Listing', url: 'news-listing', icon: 'mail' },
  ];

  constructor(private routerCtrl: Router,private dbService:DatabaseServiceService) {
    this.routerCtrl.navigate(['visit-form']);
  }
  ngOnInit(): void {
    this.dbService.getDatabaseState().subscribe((ready)=>{
      console.log('Database is ready!!!');
    })
  }
}
