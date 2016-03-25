import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {DeckComponent} from "../deck/deck.component";
import {RouteDefinition} from "angular2/router";
import {CreateComponent} from "../create/create.component";
import {StateService} from "../../services/state.service";
import {SerializeService} from "../../services/serialize.service";
import {CardDBService} from "../../services/card-db.service";

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['app/components/app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, CardDBService, SerializeService, StateService]
})

@RouteConfig(<RouteDefinition[]>[
    {
        path: '/create',
        name: 'Create',
        component: CreateComponent,
        useAsDefault: true
    },
    {
        path: '/build',
        name: 'Deck',
        component: DeckComponent
    }
])


export class AppComponent {
}