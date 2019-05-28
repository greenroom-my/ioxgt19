import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './_layout/footer/footer.component';
import {NavbarComponent} from './_layout/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ScheduleModule} from './schedule/schedule.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AttendingModule} from './attending/attending.module';

const appRoutes: Routes = [
    {
        path      : '',
        children  : [
            {
                path      : '',
                component : HomepageComponent
            },
        ]
    },
    {
        path       : '',
        pathMatch  : 'full',
        redirectTo : ''
    },
];

@NgModule({
    declarations : [
        AppComponent,
        FooterComponent,
        NavbarComponent,
        HomepageComponent
    ],
    imports      : [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FontAwesomeModule,
        ScheduleModule,
        AttendingModule,
        NoopAnimationsModule,
        AngularFirestoreModule,
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
