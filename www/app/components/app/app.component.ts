import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {DeckComponent} from "../deck/deck.component";
import {RouteDefinition} from "angular2/router";

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['app/components/app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig(<RouteDefinition[]>[
    {
        path: '/build',
        name: 'DeckComponent',
        component: DeckComponent,
        useAsDefault: true
    }
])


export class AppComponent {
}