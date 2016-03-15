export class BoardService {
    public name: string;
    public description: string;
    public cards: { [cardName: string]: number };

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.cards = {};
    }

    modifyCardCount(name: string, delta: number) {
        this.cards[name] += delta;
        if(this.cards[name] <= 0) {
            delete this.cards[name];
            return 0;
        } else {
            return this.cards[name];
        }
    }
}