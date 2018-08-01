import * as React from 'react';
import {Link} from 'react-router-dom';
import './button.component.scss';

export class Btn extends React.Component{

    render(){
        return   <Link to={this.props.url} className={this.props.class}>{this.props.value}</Link>;
    };
};