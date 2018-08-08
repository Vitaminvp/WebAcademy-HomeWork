import * as React from 'react';
import { Ajax } from './../../utils/ajax';
import { appConfig }  from './../../config';

export class MyImg extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            imgStyle: {
                width: "100px",
                height: "100px"
            },
            imgClass: "cards__box_img"
        };
        this.count = 0;
        this.prevImg = '';
        Ajax.get(`${appConfig.apiUrl}api/v1/items`, (response) => {
            this.setState({
                imgStyle: {
                    width: response.width + 150,
                    height: response.height + 150
                }
            });
        });
    }
    componentDidMount(){
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
     }
    handleClick(){
        if(this.props.item == this.prevImg){
            this.prevImg = "";
            return;
        }
        this.prevImg = this.props.item;
        this.count = this.props.count;
        if(this.props.handleClick()&& this.count < appConfig.magicNumber){
            this.props.handleClickInc(this.props.item);
            this.count++;
            this.setState({imgClass: "cards__box_img on"});
            this.timer = setTimeout(() => {
                this.count--;
                this.props.handleClickDec();
                this.setState({imgClass: "cards__box_img"});
            }, 2000);
        }
    }

    render(){
        // return <div className= {this.state.imgClass} onClick = { this.handleClick.bind(this) }><img src="http://lorempixel.com/180/200/sports" style={ this.state.imgStyle } alt="alt"/></div>;
        return <div className= {this.state.imgClass} onClick = { this.handleClick.bind(this) }><img src={'./../assets/' + this.props.item} style={ this.state.imgStyle } alt="alt"/></div>;
    }
}



