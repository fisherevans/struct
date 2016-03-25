import {Component} from 'angular2/core';
import {OnInit} from "angular2/core";

import {Deck} from "../../classes/deck.class";
import {BoardComponent} from "../board/board.component";
import {Board} from "../../classes/board.class";
import {CardDBService} from "../../services/card-db.service";
import {CardDetailsComponent} from "../card-details/card-details.component";
import {Card} from "../../interfaces/card.interface";
import {StateService} from "../../services/state.service";
import {Router} from "angular2/router";

@Component({
    selector: 'deck',
    templateUrl: 'app/components/deck/deck.component.html',
    styleUrls: ['app/components/deck/deck.component.css'],
    directives: [BoardComponent, CardDetailsComponent]
})

export class DeckComponent implements OnInit {
    deck: Deck;

    constructor(private _cardDB: CardDBService,
                private _stateService: StateService,
                private _router: Router) {
        this.deck = this._stateService.getDeck();
        if(this.deck == null) {
            this._router.navigate(['Create']);
        }
    }

    public getName(): string {
        return this.deck.name;
    }

    public getDescription(): string {
        return this.deck.description;
    }

    public getBoards(): Board[] {
        return this.deck.boards;
    }

    getSelectedCard() {
        return this._stateService.getSelectedCard();
    }

    ngOnInit() {
    }
}