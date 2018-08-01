import * as React from 'react';
import './button.component.scss';

export class Btn extends React.Component{

    render(){
        return   <a href={this.props.url} className={this.props.class}>{this.props.value}</a>;
    };
};