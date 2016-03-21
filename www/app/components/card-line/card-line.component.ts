import {Component, OnInit, EventEmitter} from 'angular2/core';
import {Input} from "angular2/core";
import {CardReference} from "../../interfaces/card-reference.interface";
import {Board} from "../../classes/board.class";
import {Card} from "../../interfaces/card.interface";
import {DeckManager} from "../../classes/deck-manager.class";

@Component({
    selector: 'card-line',
    inputs: ['cardRef', 'board', 'deckManager'],
    outputs: ['cardSelected'],
    templateUrl: 'app/components/card-line/card-line.component.html',
    styleUrls: ['app/components/card-line/card-line.component.css']
})

export class CardLineComponent implements OnInit {
    cardRef: CardReference;
    board: Board;
    deckManager: DeckManager;

    cardSelected = new EventEmitter();

    constructor() {
    }

    selectCard() {
        this.deckManager.cardSelected(this.cardRef.card.name);
    }

    getManaArray() {
        var sortValue = {
            "X": 1, "Y": 1.3, "Z": 1.6,
            "U": 2, "2U": 2.1, "UB": 2.2, "UR": 2.3, "PU": 2.4,
            "B": 3, "2B": 3.1, "BG": 3.2, "BR": 3.3, "PB": 3.4,
            "R": 4, "2R": 4.1, "RG": 4.2, "RW": 4.3, "PR": 4.4,
            "G": 5, "2G": 5.1, "GB": 5.2, "GW": 5.3, "PG": 5.4,
            "W": 6, "2W": 6.1, "WB": 6.2, "WU": 6.3, "PW": 6.4
        };
        var getSortValue = function(color:string) {
            return sortValue[color] ? sortValue[color] : 0;
        };
        var cost = [];
        var card = this.cardRef.card;
        Object.keys(card.cost).map(function(color: string) {
            var count:number = card.cost[color];
            if(color == "C") {
                cost.push(""+count);
            } else {
                for (var id = 0; id < count; id++) {
                    cost.push(color);
                }
            }
        });
        cost.sort(function(a, b) { return getSortValue(a) - getSortValue(b); });
        return cost;
    }

    modifyCount(delta:number) {
        this.board.modifyCardCount(this.cardRef.card.name, delta);
    }

    ngOnInit() {

    }
}