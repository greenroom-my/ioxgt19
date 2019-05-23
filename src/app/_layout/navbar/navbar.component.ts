import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector    : 'app-navbar',
    templateUrl : './navbar.component.html',
    styleUrls   : [ './navbar.component.scss' ],
    animations  : [
        trigger('navBar', [
            state('open', style({
                width   : '300px',
                opacity : 1
            })),
            state('closed', style({
                width   : '0px',
                opacity : 0,
            })),
            transition('* => closed', [
                animate('1s')
            ]),
            transition('* => open', [
                animate('0.5s')
            ]),
        ]),
    ]
})
export class NavbarComponent implements OnInit {
    private status: string;

    constructor() {
    }

    ngOnInit() {
    }

    toggleNav() {
        this.status = this.status === 'close' ? 'open' : 'close';
    }
}
