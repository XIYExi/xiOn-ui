export const judgeChildIsNull = (child: any) => child === null
    || child === undefined
    || (Array.isArray(child) && child.length === 0)