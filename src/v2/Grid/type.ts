
export type GridOnlyProp =
    | string
    | 'computer'
    | 'largeScreen'
    | 'mobile'
    | 'tablet mobile'
    | 'tablet'
    | 'widescreen';

export type TTextAlign =
    'left'
    | 'center'
    | 'right'
    | 'justified';

export type TVertical =  'top' | 'middle' | 'bottom';


export type TFloated = 'left' | 'right'


export type GridReversedProp =
    | string
    | 'computer'
    | 'computer vertically'
    | 'mobile'
    | 'mobile vertically'
    | 'tablet'
    | 'tablet vertically'


type SemanticWIDTHSNUMBER = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16
type SemanticWIDTHSSTRING =
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | 'one'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten'
    | 'eleven'
    | 'twelve'
    | 'thirteen'
    | 'fourteen'
    | 'fifteen'
    | 'sixteen'


export type SemanticWIDTHS = SemanticWIDTHSNUMBER | SemanticWIDTHSSTRING

