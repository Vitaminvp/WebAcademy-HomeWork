import * as React from 'react';
import { Ajax } from './../../utils/ajax';
const URL = 'https://ec-test-react.herokuapp.com/';


export class MyImg extends React.Component {
    constructor(){
        super();
        this.state = {
            width: "100px",
            height: "100px"
        }
    }
    componentDidMount(){
        Ajax.get(`${URL}api/v1/items`, (response) => {
            this.setState({
                width: response.width,
                height: response.height,
            });
        });
    }

    render(){
        return <div className="cards__box_img"><img src={'./assets/' + this.props.item} style={ this.state } alt="alt"/></div>;
    }

}



