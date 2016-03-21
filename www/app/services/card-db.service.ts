import {Injectable} from 'angular2/core'
import {Card} from '../interfaces/card.interface';

@Injectable()
export class CardDBService {
    private cards: { [cardName: string]: Card };
    constructor() {
        let tempCards = {};
        Object.keys(window['rawCards']).map(function(cardName) {
            var rawCard = window['rawCards'][cardName];
            var cost = {};
            if(rawCard.manaCost) {
                var costMatches = rawCard.manaCost.match(/\{[^{]+\}/g);
                costMatches.forEach(function (rawCost) {
                    var key:string, value:number;
                    var colorless = rawCost.match(/\{[0-9]+\}/);
                    if(colorless) {
                        key = "C";
                        value = +rawCost.replace("{", "").replace("}", "");
                    } else {
                        key = rawCost.replace("{", "").replace("}", "");
                        value = 1;
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
            tempCards[cardName] = card;
        });
        this.cards = tempCards;
    }
    getCard(name) {
        return this.cards[name];
    }
}
