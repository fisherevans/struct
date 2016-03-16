import {Component} from 'angular2/core';
import {Input} from "angular2/core";

import {Board} from "../../classes/board.class";

@Component({
    selector: 'board',
    inputs: ['board'],
    templateUrl: 'app/components/deck/deck.component.html',
    styleUrls: ['app/components/deck/deck.component.css']
})

export class BoardComponent {
    board: Board;

    constructor() { }
}