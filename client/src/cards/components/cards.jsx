import * as React from 'react';
import { Ajax } from '../utils/ajax';
import {MyCard} from "./card/card.jsx";
import { appConfig } from './../config';
import './cards.scss';

export class Cards extends React.Component {
    constructor(){
        super();
        this.state = {
            pics: [
                "static/1.jpg",
                "static/2.jpg",
                "static/3.png",
                "static/4.jpg",
                "static/5.png",
                "static/6.jpg"
            ]
        };

    }
    componentDidMount(){
        Ajax.get(`${appConfig.apiUrl}api/v1/pictures`, (response) => {
            this.setState({
                pics: this.state.pics.concat(response)
            });
        });
    }
    handlState(arr){
        this.setState({
            pics: arr
        });
    }
    render(){
        return <MyCard imgsrc = {this.state.pics} handlState = { this.handlState.bind(this) } />;
    }

}

