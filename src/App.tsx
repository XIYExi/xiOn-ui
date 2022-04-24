import React, {Component, useState} from 'react';

import Message from "./components/Message/message";
import {Button, MouseListener, Statistic, Table, Zone} from "./index";
import {AiFillStar, AiOutlineClose, AiOutlineHeart, AiOutlineStop} from "react-icons/ai";
import Notice from "./components/Notice/Notice";
import {Col, Row} from "./components/Grid";
import Rate from "./components/Rate/rate";
import Modal from "./components/Modal/modal";
import Carousel from "./components/Carousel/carousel";




const App:React.FC = () => {


    const handleNormalClick = () => {
        Notice["info"]({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            duration: 5000,
            placement: 'bottomRight'
        })
    }

    const list = [
        <AiFillStar size='30px'/>,
        <AiOutlineHeart size='30px'/>,
        <AiOutlineStop size='30px'/>,
    ]

    const text = ['0.5￥','1￥','1.5￥','2￥','2.5￥','3￥','3.5￥','4￥','4.5￥','5￥','5.5￥','6￥','6.5￥','7￥']
    const textNormal = ['1￥','2￥','3￥','4￥','5￥','6￥','7￥'];

    const [visible, setVisible] = useState(false);

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return(
        <MouseListener id='loleShowListener'>
            <Zone >
                <Statistic floated='right'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                    facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                    referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                    electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                    ex natum rebum iisque.
                </p>

                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>

                <Statistic floated='left'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                </p>
                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>
            </Zone>
            <Zone listen>
                <Statistic floated='right'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                    facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                    referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                    electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                    ex natum rebum iisque.
                </p>

                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>

                <Statistic floated='left'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                </p>
                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>
            </Zone>
            <Zone listen>
                <Statistic floated='right'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                    facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                    referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                    electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                    ex natum rebum iisque.
                </p>

                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>

                <Statistic floated='left'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                </p>
                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>
            </Zone>
            <Zone listen>
                <Statistic floated='right'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                    facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                    referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                    electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                    ex natum rebum iisque.
                </p>

                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>

                <Statistic floated='left'>
                    <Statistic.Value>2,204</Statistic.Value>
                    <Statistic.Label>Views</Statistic.Label>
                </Statistic>

                <p>
                    Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut
                    facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te
                    porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi
                    everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu
                    per, quas minimum postulant per id.
                </p>
                <p>
                    Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
                    definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his te
                    phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo vide
                    phaedrum, vim vivendum maiestatis in.
                </p>
            </Zone>
        </MouseListener>
    )
    
}

export default App;
