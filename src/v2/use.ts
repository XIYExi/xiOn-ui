import {numberToWord} from "./utils";

export const handleKeyOrValueAndKey = (val: any, key: any) => val && (val === true ? key : `${val} ${key}`)

export const handleValueAndKey = (val: any, key: any) => val && val !== true && `${val} ${key}`


export const handleTextAlignProp = (val: any) =>
    val === 'justified' ? 'justified' : handleValueAndKey(val, 'aligned')

export const handleVerticalAlignProp = (val: any) => handleValueAndKey(val, 'aligned')


export const handleMultipleProp = (val:any, key:any) => {
    if (!val || val === true) return null

    return val
        .replace('large screen', 'large-screen')
        .replace(/ vertically/g, '-vertically')
        .split(' ')
        .map((prop:string) => `${prop.replace('-', ' ')} ${key}`)
        .join(' ')
}



export const handleWidthProp = (val: any, widthClass = '', canEqual = false) => {
    if (canEqual && val === 'equal') {
        return 'equal width'
    }
    const valType = typeof val
    if ((valType === 'string' || valType === 'number') && widthClass) {
        return `${numberToWord(val)} ${widthClass}`
    }
    return numberToWord(val)
}