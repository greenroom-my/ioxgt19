import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttendingComponent} from './pages/attending/attending.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path     : 'attending',
        children : [
            {
                path      : '',
                component : AttendingComponent
            },
        ]
    }
];

@NgModule({
    imports      : [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    declarations : [ AttendingComponent ]
})
export class AttendingModule {}
