export const useKeyOrValueAndKey = (val: any, key: any) => val && (val === true ? key : `${val} ${key}`)

export const useValueAndKey = (val: any, key: any) => val && val !== true && `${val} ${key}`


export const useTextAlignProp = (val: any) =>
    val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned')

export const useVerticalAlignProp = (val: any) => useValueAndKey(val, 'aligned')
