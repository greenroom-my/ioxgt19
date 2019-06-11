import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector    : 'app-speaker-dialog',
    templateUrl : './speaker-dialog.component.html',
    styleUrls   : ['./speaker-dialog.component.scss']
})

export class SpeakerDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<SpeakerDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public speaker
    ) {
    }

    ngOnInit() {
    }

}
