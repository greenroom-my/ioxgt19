import {Component, OnInit} from '@angular/core';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector    : 'app-footer',
    templateUrl : './footer.component.html',
    styleUrls   : [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
    faFacebook = faFacebook;

    constructor() {
    }

    ngOnInit() {
    }

}
