import * as React from 'react';
import { Ajax } from '../utils/ajax';
import '../styles/cards.scss';
import {MyCard} from "./card/card.jsx";
import { appConfig } from './../config';
import './cards.scss';

export class Cards extends React.Component {
    constructor(){
        super();
        this.state = {
            pics: []
        };

    }
    componentDidMount(){
        Ajax.get(`${appConfig.apiUrl}api/v1/pictures`, (response) => {
            this.setState({
                pics: response
            });
        });
    }

    render(){
        console.log(this.state.pics)
        return <MyCard imgsrc = {this.state.pics}/>;
    }

}

