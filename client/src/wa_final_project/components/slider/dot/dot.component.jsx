import * as React from 'react';
import './dot.component.scss';
export class Dot extends React.Component{
    enableSlide(i){
        this.props.click(i);
    }
    render(){
        let dotClass = this.props.isActive ? 'active' : '';
        return <li className={dotClass}  onClick={() => {this.enableSlide(this.props.i)}}><a>&nbsp;</a></li>;
    }
}