import ImageGroup, {BaseImageGroupProps} from "./image_group";
import Image, {BaseImageProps} from './image';
import React from "react";


export type IImageComponent = React.FC<BaseImageProps> & {
    Group: React.FC<BaseImageGroupProps>;
}

const IImage = Image as IImageComponent;
IImage.Group = ImageGroup;

export default IImage;