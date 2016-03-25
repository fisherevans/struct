import {Pipe, PipeTransform} from 'angular2/core';
import {CardReference} from "../interfaces/card-reference.interface";
import {Card} from "../interfaces/card.interface";

@Pipe({
    name: 'manaReplace',
    pure: false
})
export class ManaReplacePipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        console.log(value);
        value = value.replace(
            /\{([^}]+)\}/g,
            '<img class="mana-icon" src="img/mana/$1.png" />');
        console.log(value);
        return value;
    }
}
