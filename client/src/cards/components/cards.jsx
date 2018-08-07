import * as React from 'react';
import { Ajax } from '../utils/ajax';
import '../styles/cards.scss';
import {MyCard} from "./card/card.jsx";

const URL = 'https://ec-test-react.herokuapp.com/';

export class Cards extends React.Component {
    constructor(){
        super();
        this.state = {
            pics: []
        };
        // Ajax.get(`${URL}api/v1/items`, (response) => {
        //     console.log(response);
        // });


    }
    componentDidMount(){
        Ajax.get(`${URL}api/v1/pictures`, (response) => {
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

