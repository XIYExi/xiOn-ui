import {instance} from "@storybook/node-logger";

export interface numberToWord{
    1:string,
    2:string,
    3:string,
    4:string,
    5:string,
    6:string,
    7:string,
    8:string,
    9:string,
    10:string,
    11:string,
    12:string,
    13:string,
    14:string,
    15:string,
    16:string,
    17:string,
    18:string,
    19:string,
    20:string,
    21:string,
    22:string,
    23:string,
    24:string
}

export const numberToWordMap:numberToWord = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty-one',
    22: 'twenty-two',
    23: 'twenty-three',
    24: 'twenty-four'
}

export function numberToWord<T extends object, K extends keyof T>(obj:T, key:K){
    return obj[key];
}

export function returnWord(value: any):string{
    const type = typeof value;
    if (value === 'string')
        return value;
    if (value === 'number')
        return numberToWord(numberToWordMap, value);
    return '';
}