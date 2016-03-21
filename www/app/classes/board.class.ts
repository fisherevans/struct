import {CardReference} from "../interfaces/card-reference.interface";
export class Board {
    public name: string;
    public description: string;
    public cards: { [cardName: string]: CardReference };

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.cards = {};
    }

    modifyCardCount(name: string, delta: number) {
        this.cards[name].count += delta;
        if(this.cards[name].count <= 0) {
            console.log("deleting " + name);
            delete this.cards[name];
            return 0;
        } else {
            return this.cards[name].count;
        }
    }
}