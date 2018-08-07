import * as React from 'react';
import { Ajax } from './../utils/ajax';
import '../styles/cards.scss';

const URL = 'https://ec-test-react.herokuapp.com/';

export class Cards extends React.Component {
    constructor(){
        super();
        this.state = {

        };
        Ajax.get(`${URL}api/v1/items`, (response) => {
            console.log(response);
        });
    }



    render(){
        return <div className="cards">

               </div>
    }

}

