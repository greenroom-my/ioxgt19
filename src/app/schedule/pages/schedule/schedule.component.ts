import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
    selector    : 'app-schedule',
    templateUrl : './schedule.component.html',
    styleUrls   : [ './schedule.component.scss' ]
})
export class ScheduleComponent implements OnInit {
    items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('schedule', ref => ref.orderBy('hrs', 'asc')).valueChanges();
    }

    ngOnInit() {
    }



}
