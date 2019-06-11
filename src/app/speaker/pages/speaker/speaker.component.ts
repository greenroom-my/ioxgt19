import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material';
import {SpeakerDialogComponent} from '../../component/speaker-dialog/speaker-dialog.component';

@Component({
    selector    : 'app-speaker',
    templateUrl : './speaker.component.html',
    styleUrls   : ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

    items: Observable<any[]>;

    constructor(
        public db: AngularFirestore,
        public dialog: MatDialog
    ) {
        this.items = db.collection('speakers', ref => ref.orderBy('name', 'asc')).valueChanges();
    }

    ngOnInit() {
    }

    showDialog(speaker) {
        this.dialog.open(SpeakerDialogComponent, {
            width : '700px',
            data  : {
                ...speaker
            }
        });
    }

}

