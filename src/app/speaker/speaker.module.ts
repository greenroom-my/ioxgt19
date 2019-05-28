import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpeakerComponent} from './pages/speaker/speaker.component';
import {RouterModule, Routes} from '@angular/router';

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
    imports      : [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    declarations : [ SpeakerComponent ]
})
export class SpeakerModule {}
