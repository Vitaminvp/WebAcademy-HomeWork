import * as React from 'react';
import { Ajax } from './../../utils/ajax';
import { appConfig }  from './../../config';

export class MyImg extends React.Component {
    constructor(){
        super();
        this.state = {
            width: "100px",
            height: "100px"
        };
        this.count = 0;
    }
    componentDidMount(){
        Ajax.get(`${appConfig.apiUrl}api/v1/items`, (response) => {
            this.setState({
                imgStyle: {
                    width: response.width + 150,
                    height: response.height + 150
                },
                imgClass: "cards__box_img"
            });
        });
    }
    handleClick(){
        console.log("befor", this.count);
        if(this.count < 2){
            this.setState({imgClass: "cards__box_img on"});
            this.count++;
            console.log("incr", this.count);
            setTimeout(() => {
                this.setState({imgClass: "cards__box_img"});
                // this.count--;
                console.log("decr", this.count);
            }, 1500);
        }
        return null;
    }
    render(){
        return <div className= {this.state.imgClass} onClick = { this.handleClick.bind(this) }><img src={"https://picsum.photos/200/300/?random"} style={ this.state.imgStyle } alt="alt"/></div>;
    }
}



