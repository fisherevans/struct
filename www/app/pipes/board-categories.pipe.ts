import {Pipe, PipeTransform} from 'angular2/core';
import {CardReference} from "../interfaces/card-reference.interface";
import {Card} from "../interfaces/card.interface";

@Pipe({
    name: 'boardCategories',
    pure: false
})
export class BoardCategoriesPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {

        var CardAlphaSort = function(a: Object, b: Object) {
            var aName = a["card"] ? a["card"]["name"] : "";
            var bName = b["card"] ? b["card"]["name"] : "";
            return aName > bName ? 1 : -1;
        };

        var CatAlphaSort = function(a: Object, b: Object) {
            return a["name"] > b["name"] ? 1 : -1;
        };

        var TypeFunction = function(card:Card) {
            var TrumpTypes = [
                "Land",
                "Creature",
                "Sorcery",
                "Instant",
                "Enchantment",
                "Planeswalker"
            ];
            var baseType = card.type.replace(/ +-.*/, "");
            for(var id = 0;id < TrumpTypes.length;id++) {
                console.log(baseType + " has " + TrumpTypes[id] + "?");
                if(baseType.indexOf(TrumpTypes[id]) >= 0) {
                    console.log("true");
                    return TrumpTypes[id];
                }
            }
            return baseType;
        };

        var MethodMap = {
            "type": TypeFunction
        };
        var categoryFunction = args[0] ? MethodMap[args[0]] : TypeFunction;
        var cats = {};
        Object.keys(value).map(function(cardName) {
            var cardRef:CardReference = value[cardName];
            var cat = categoryFunction(cardRef.card);
            if(!cats[cat])
                cats[cat] = [];
            cats[cat].push(cardRef);
        });
        Object.keys(cats).map(function(cat) {
            cats[cat].sort(CardAlphaSort);
        });
        var catArray = [];
        Object.keys(cats).map(function(cat) {
            catArray.push({
                "name": cat,
                "cards": cats[cat]
            });
        });
        catArray.sort(CatAlphaSort);
        return catArray;
    }
}
