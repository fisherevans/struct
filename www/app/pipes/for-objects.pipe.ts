import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'forobjects'})
export class ForObjectsPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let keyArr = Object.keys(value),
            dataArr = [],
            keyName = args[0];

        keyArr.forEach(key => {
            value[key][keyName] = key;
            dataArr.push(value[key])
        });

        if(args[1]) {
            dataArr.sort((a: Object, b: Object): number => {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }

        return dataArr;
    }
}