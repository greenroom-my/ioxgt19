import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScheduleComponent} from './pages/schedule/schedule.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';

const routes: Routes = [
    {
        path     : 'schedule',
        children : [
            {
                path      : '',
                component : ScheduleComponent
            },
        ]
    }
];

@NgModule({
    imports      : [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        CommonModule,
        RouterModule.forRoot(routes),
        AngularFirestoreModule,
    ],
    declarations : [ ScheduleComponent ]
})
export class ScheduleModule {}
