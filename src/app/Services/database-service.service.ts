import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { VisitorForm } from 'src/Models/VisitorForm';

@Injectable({
  providedIn: 'root',
})
export class DatabaseServiceService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private visits = new BehaviorSubject([]);

  constructor(
    private plt: Platform,
    private sqlitePorter: SQLitePorter,
    private sqlite: SQLite,
    private http:HttpClient
  ) {
    this.plt.ready().then(() => {
      this.sqlite
        .create({
          name: 'visitor.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
        });
    });
  }

  seedDatabase() {
    this.http
      .get('assets/seed-database.sql', { responseType: 'text' })
      .subscribe((sql) => {
        this.sqlitePorter
          .importSqlToDb(this.database, sql)
          .then((_) => {

            this.dbReady.next(true);
          })
          .catch((e) => console.error(e));
      });
  }

  public getDatabaseState(){
    return this.dbReady.asObservable();
  }

  public getVisits(): Observable<VisitorForm[]>{
    return this.visits.asObservable();
  }

  public loadVisits(){
    return this.database.executeSql('select * from visit',[]).then((data)=>{
      const visitsFromDb:VisitorForm[]=[];
      if(data.rows.length>0){
        for(let i=0;i<data.rows.length;i++){
          visitsFromDb.push({
            visitorName: data.rows.item(i).visitorName,
            visitorEmail: data.rows.item(i).visitorEmail,
            visitType: data.rows.item(i).visitType,
            personToVisit: data.rows.item(i).personToVisit,
            dateOfVisit: data.rows.item(i).dateOfVisit,
            entryTime: data.rows.item(i).entryTime,
            exitTime: data.rows.item(i).exitTime,
          });
        }
      }
      this.visits.next(visitsFromDb);
      return visitsFromDb;
    });
  }

  public insertVisit(visit:VisitorForm){
    const data =[
      visit.visitorName,
      visit.visitorEmail,
      visit.visitType,
      visit.personToVisit,
      visit.entryTime,
      visit.exitTime
    ];
    this.database
      .executeSql(
        'insert into visit(visitorName,visitorEmail,visitType,personToVisit,entryTime,exitTime) values(?,?,?,?,?,?)',
        data
      )
      .then(() => {
        this.loadVisits();
      });
  }
}
