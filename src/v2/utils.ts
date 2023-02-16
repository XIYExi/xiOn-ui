export const useMultipleProp = (val:any, key:any) => {
    if (!val || val === true) return null

    return val
        .replace('large screen', 'large-screen')
        .replace(/ vertically/g, '-vertically')
        .split(' ')
        .map((prop:string) => `${prop.replace('-', ' ')} ${key}`)
        .join(' ')
}

export const numberToWordMap = {
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
}


export function numberToWord(value: any) {
    const type = typeof value
    if (type === 'string' || type === 'number') {
        return numberToWordMap[value as keyof typeof numberToWordMap] || value
    }

    return ''
}



export const useWidthProp = (val: any, widthClass = '', canEqual = false) => {
    if (canEqual && val === 'equal') {
        return 'equal width'
    }
    const valType = typeof val
    if ((valType === 'string' || valType === 'number') && widthClass) {
        return `${numberToWord(val)} ${widthClass}`
    }
    return numberToWord(val)
}