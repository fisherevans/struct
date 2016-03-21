import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'boardCards',
    pure: false
})
export class BoardCardsPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let dataArr = [];
        Object.keys(value).forEach(key => {
            dataArr.push(value[key]);
        });
        dataArr.sort((a: Object, b: Object): number => {
            var aName = a["card"] ? a["card"]["name"] : "";
            var bName = b["card"] ? b["card"]["name"] : "";
            return aName > bName ? 1 : -1;
        })
        return dataArr;
    }
}
