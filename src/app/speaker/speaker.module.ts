import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeakerComponent} from './pages/speaker/speaker.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatDialogModule} from '@angular/material';
import {SpeakerDialogComponent} from './component/speaker-dialog/speaker-dialog.component';

const routes: Routes = [
    {
        path     : 'speaker',
        children : [
            {
                path      : '',
                component : SpeakerComponent
            },
        ]
    }
];

@NgModule({
    imports         : [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        CommonModule,
        MatDialogModule,
        RouterModule.forRoot(routes),
        AngularFirestoreModule,
    ],
    declarations    : [
        SpeakerComponent,
        SpeakerDialogComponent
    ],
    entryComponents : [
        SpeakerDialogComponent
    ],
})

export class SpeakerModule {}
