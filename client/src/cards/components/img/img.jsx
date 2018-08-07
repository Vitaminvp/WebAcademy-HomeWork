import * as React from 'react';
import { Ajax } from './../../utils/ajax';
import { appConfig }  from './../../cards';

export class MyImg extends React.Component {
    constructor(){
        super();
        this.state = {
            width: "100px",
            height: "100px"
        }
    }
    componentDidMount(){
        Ajax.get(`${appConfig.apiUrl}api/v1/items`, (response) => {
            this.setState({
                width: response.width + 150,
                height: response.height + 150
            });
        });
    }

    render(){
        return <div className="cards__box_img"><img src={'./../assets/' + this.props.item} style={ this.state } alt="alt"/></div>;
    }

}



