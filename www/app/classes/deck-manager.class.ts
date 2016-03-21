import {DeckComponent} from "../components/deck/deck.component";
export class DeckManager {
    constructor(private _deck:DeckComponent) {

    }

    cardSelected(cardName:string) {
        this._deck.cardSelected(cardName);
    }
}