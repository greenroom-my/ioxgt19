import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './_layout/footer/footer.component';
import {NavbarComponent} from './_layout/navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';

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
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
