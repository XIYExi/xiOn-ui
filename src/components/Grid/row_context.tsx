import {createContext, Context} from "react";

export interface RowContextProps{
    gutter?:number;
}

const RowContext: Context<RowContextProps> = createContext({});

export default RowContext;