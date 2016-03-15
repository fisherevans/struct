import {Injectable} from "angular2/core";
import {BoardService} from "./board.service";

@Injectable()
export class DeckService {
    public name: string;
    public description: string
    public boards: BoardService[];

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.boards = [];
    }

    addBoard(name: string, description: string): BoardService {
        var board = new BoardService(name, description);
        this.boards.push(board);
        return board;
    }
}