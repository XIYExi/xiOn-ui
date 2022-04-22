import React from "react";
import Zone, {BaseZoneProps} from './zone';
import ZoneGroup, {BaseZoneGroups} from "./zone_group";

export type IZoneComponent = React.FC<BaseZoneProps> & {
    Group: React.FC<BaseZoneGroups>;
}

const IZone = Zone as IZoneComponent;
IZone.Group = ZoneGroup

export default IZone;
