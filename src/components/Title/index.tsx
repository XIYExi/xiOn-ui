import React from "react";

import Title, {BaseHeaderProps} from "./title";
import TitleContainer, {BaseHeaderContainerProps} from "./title_container";
import TitleSubheader, {BaseHeaderSubheaderProps} from "./title_subheader";



export type IHeaderComponent = React.FC<BaseHeaderProps> & {
    Container: React.FC<BaseHeaderContainerProps>;
    Subheader: React.FC<BaseHeaderSubheaderProps>;
}

const ITitle = Title as IHeaderComponent;
ITitle.Container = TitleContainer;
ITitle.Subheader = TitleSubheader;


export default ITitle;