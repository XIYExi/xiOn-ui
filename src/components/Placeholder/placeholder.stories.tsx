import {storiesOf} from "@storybook/react";
import {Placeholder, Zone} from "../../index";

const {PHeader, PImage, PLine, PParagraph} = Placeholder;

storiesOf('Placeholder Component',module)
    .add('基本使用',()=>{
        return(
            <Zone>
                <Placeholder>
                    <PHeader image>
                        <PLine/>
                        <PLine/>
                        <PLine/>
                    </PHeader>
                    <PParagraph>
                        <PLine/>
                        <PLine/>
                        <PLine/>
                        <PLine/>
                    </PParagraph>
                </Placeholder>
            </Zone>
        )
    })
    .add('行',()=>{
        return(
            <Zone>
                <Placeholder>
                    <Placeholder.PLine />
                    <Placeholder.PLine />
                    <Placeholder.PLine />
                    <Placeholder.PLine />
                    <Placeholder.PLine />
                </Placeholder>
            </Zone>
        )
    })
    .add('Headers',()=>{
        return(
            <Zone>
                <Placeholder>
                    <Placeholder.PHeader image>
                        <Placeholder.PLine />
                        <Placeholder.PLine />
                    </Placeholder.PHeader>
                </Placeholder>
            </Zone>
        )
    })
    .add('段',()=>{
        return(
            <Placeholder>
                <PParagraph>
                    <PLine/>
                    <PLine/>
                    <PLine/>
                    <PLine/>
                    <PLine/>
                </PParagraph>
                <PParagraph>
                    <PLine/>
                    <PLine/>
                    <PLine/>
                </PParagraph>
            </Placeholder>
        )
    })
    .add('图片',()=>{
        return(
            <Placeholder>
                <PImage />
            </Placeholder>
        )
    })
    .add('控制行的长度',()=>{
        return(
            <Placeholder>
                <PLine length='full' />
                <PLine length='long' />
                <PLine length='medium' />
                <PLine length='short' />
            </Placeholder>
        )
    })
    .add('流式布局',()=>{
        return(
            <Placeholder fluid>
                <Placeholder.PHeader image>
                    <Placeholder.PLine />
                    <Placeholder.PLine />
                </Placeholder.PHeader>
                <Placeholder.PParagraph>
                    <Placeholder.PLine />
                    <Placeholder.PLine />
                    <Placeholder.PLine />
                </Placeholder.PParagraph>
            </Placeholder>
        )
    })
    .add('反色',()=>{
        return(
            <Zone inverted>
                <Placeholder inverted>
                    <PHeader image>
                        <PLine/>
                        <PLine/>
                        <PLine/>
                    </PHeader>
                    <PParagraph>
                        <PLine/>
                        <PLine/>
                        <PLine/>
                        <PLine/>
                    </PParagraph>
                </Placeholder>
            </Zone>
        )
    })