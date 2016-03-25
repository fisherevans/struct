import {Board} from "./board.class";

export class Deck {
    public name: string;
    public description: string
    public boards: Board[];

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.boards = [];
    }

    getBoard(name:string):Board {
        for(var id = 0;id < this.boards.length;id++) {
            if(this.boards[id].name == name) {
                return this.boards[id];
            }
        }
        return null;
    }

    addBoard(name: string, description: string): Board {
        var board = new Board(name, description);
        this.boards.push(board);
        return board;
    }
}