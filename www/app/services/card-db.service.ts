import {Injectable} from 'angular2/core'
import {RAW_CARD_DB} from './card-db.service.mock-data';
import {Card} from '../interfaces/card.interface';

@Injectable()
export class CardDBService {
    constructor(private _cards: { [cardName: string]: Card }) {
        _cards = {};
        Object.keys(RAW_CARD_DB).map(function(cardName) {
            var rawCard = RAW_CARD_DB[cardName];
            var cost = {};
            if(rawCard.manaCost) {
                var costMatches = rawCard.manaCost.match(/\{[0-9A-Z]\}/g);
                costMatches.forEach(function (rawCost) {
                    var key:string = null;
                    var value:number = 1;
                    if (rawCost.indexOf("U") > 0) key = "U";
                    else if (rawCost.indexOf("B") > 0) key = "B";
                    else if (rawCost.indexOf("G") > 0) key = "G";
                    else if (rawCost.indexOf("R") > 0) key = "R";
                    else if (rawCost.indexOf("W") > 0) key = "W";
                    else {
                        key = "C";
                        value = +rawCost.replace("{", "").replace("}", "");
                    }
                    if (key != null) {
                        if (!cost[key]) {
                            cost[key] = 0;
                        }
                        cost[key] += value;
                    }
                });
            }
            var card: Card = {
                name: rawCard.name,
                cost: cost,
                type: rawCard.type,
                text: rawCard.text,
                flavor: rawCard.flavor,
                multiverseId: rawCard.multiverseid,
                cmc: rawCard.cmc,
                identity: rawCard.colorIdentity,
                power: rawCard.power,
                toughness: rawCard.toughness,
                rarity: rawCard.rarity
            };
            _cards[cardName] = card;
        });
    }
    getCard(name) {
        return this._cards[name];
    }
}
