import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import Icon, {ThemeProps} from "../Icon/icon";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
/*library.add(fas);*/

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;
const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;
const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;
  padding: 0px 7.5px 20px;
  svg {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;
export const IconTheme = () => {

    const list = ['primary','secondary','success','info','warning','danger','light','dark'];
    return(
        <>
            <List>
                {
                    list.map((item,_)=>(
                        <Item key={_}><Icon icon={'search'} theme={item as ThemeProps}/></Item>
                    ))
                }
            </List>
        </>
    )
};

storiesOf('Icon Components',module)
    .add('主题',IconTheme)



