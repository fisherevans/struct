import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";

import {DeckService} from "../../services/deck.service";
import {BoardComponent} from "../board/board.component";
import {BoardService} from "../../services/board.service";

@Component({
    selector: 'deck',
    templateUrl: 'app/components/deck/deck.component.html',
    styleUrls: ['app/components/deck/deck.component.css'],
    directives: [BoardComponent]
})

export class DeckComponent implements OnInit {
    public deckService: DeckService;
    public selectedCardName: string;

    constructor() { }

    public getName(): string {
        return this.deckService.name;
    }

    public getDescription(): string {
        return this.deckService.description;
    }

    public getBoards(): BoardService[] {
        return this.deckService.boards;
    }

    ngOnInit() {
        this.deckService = new DeckService("A New Deck", "Some description");
        this.deckService.addBoard("Main Board", "The main deck");
        this.selectedCardName = null;
    }
}