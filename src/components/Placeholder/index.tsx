import React from "react";
import Placeholder, {BasePlaceholderProps} from "./placeholder";
import PlaceholderHeader, {BasePlaceholderHeader} from "./placeholder_header";
import PlaceholderImage, {BasePlaceHolderImageProps} from "./placeholder_image";
import PlaceholderLine, {BasePlaceholderLineProps} from "./placeholder_line";
import PlaceholderParagraph, {BasePlaceholderParagraph} from "./placeholder_paragraph";

export type IPlaceholderComponent = React.FC<BasePlaceholderProps> & {
    PHeader: React.FC<BasePlaceholderHeader>,
    PImage: React.FC<BasePlaceHolderImageProps>,
    PLine:React.FC<BasePlaceholderLineProps>,
    PParagraph:React.FC<BasePlaceholderParagraph>
}

const IPlaceholder = Placeholder as IPlaceholderComponent;
IPlaceholder.PHeader = PlaceholderHeader;
IPlaceholder.PImage = PlaceholderImage;
IPlaceholder.PLine = PlaceholderLine;
IPlaceholder.PParagraph = PlaceholderParagraph;

export default IPlaceholder;