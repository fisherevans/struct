import {Component, OnInit} from 'angular2/core';
import {Card} from "../../interfaces/card.interface";

@Component({
    selector: 'card-details',
    inputs: ['card'],
    templateUrl: 'app/components/card-details/card-details.component.html',
    styleUrls: ['app/components/card-details/card-details.component.css']
})

export class CardDetailsComponent implements OnInit {
    card: Card;

    constructor() {
    }

    ngOnInit() {

    }
}