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

    addBoard(name: string, description: string): Board {
        var board = new Board(name, description);
        this.boards.push(board);
        return board;
    }
}