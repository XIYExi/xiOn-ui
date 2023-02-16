import {CSSProperties, ReactNode} from "react";

export interface CommonInterface {

    id?:string;

    className?:string;

    style?: CSSProperties;

    children?:ReactNode;

}