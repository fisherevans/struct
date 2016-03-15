import {Component} from 'angular2/core';
import {Input} from "angular2/core";

import {BoardService} from "../../services/board.service";
import {View} from "angular2/core";

@Component({
    selector: 'board',
    inputs: ['boardService'],
    templateUrl: 'app/components/deck/deck.component.html',
    styleUrls: ['app/components/deck/deck.component.css']
})

export class BoardComponent {
    boardService: BoardService;

    constructor() { }
}