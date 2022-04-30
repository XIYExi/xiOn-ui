import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import AutoComplete, {DataSourceType} from "./auto_complete";
import styled from "styled-components";
// @ts-ignore
library.add(fas);

const TP = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 5px;
`

const AutoCompleteBase = () => {

    const fetchList = (query:string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
            .then(response => response.json())
            .then(({items}) => {
                console.log(items)
                return items
                    .slice(0, 10)
                    .map((item: any) => ({value: item.login, ...item}))
            })
    }

    return(
        <>
            <AutoComplete fetchSuggestions={fetchList}/>
        </>
    )
}

const AutoCompleteOpt = () => {

    interface GithubUserProps{
        login:string;
        url:string;
        avatar_url:string;
    }

    const FetchList = (query:string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
            .then(response => response.json())
            .then(({items}) => {
                console.log(items)
                return items
                    .slice(0, 10)
                    .map((item: any) => ({value: item.login, ...item}))
            })
    }

    const renderOpt = (item:DataSourceType) => {
        const itemWithGithub = item as DataSourceType<GithubUserProps>;
        return(
            <>
                <TP>Name: {itemWithGithub.login}</TP>
                <TP>url: {itemWithGithub.url}</TP>
            </>
        )
    }

    return(
        <>
            <AutoComplete fetchSuggestions={FetchList}
                          renderOption={renderOpt}
            />
        </>
    )
}

storiesOf('AutoComplete Component',module)
    .add('基本使用',AutoCompleteBase)
    .add('自定义筛选方案',AutoCompleteOpt)