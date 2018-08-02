import * as React from 'react';
import { Btn } from "../../button/button.component.jsx";
import './slide.component.scss';
export class Slide extends React.Component{

    render(){
    let bgImage = this.props.item.bgimg;
    const slideImage = {
        width: "100%",
        backgroundSize: "cover",
        height: "100%",
        backgroundImage: `url(./../../../../assets/images/${bgImage})`
    };
    return <div  key = {this.props.item.id} className={ this.props.isActive ? "slider__slide slider__slide_active" : "container slider__slide"} style={ slideImage } >
            <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-md-7">
                        <div className="iblock">
                            <div className="iblock_title">{this.props.item.title} <span>{this.props.item.title2}</span></div>
                            <div className="iblock_text">{this.props.item.text}</div>
                            <div className="iblock_buttons">
                                <Btn url="#" value="Watch Trailer" class="btn btn-green"/>
                                <Btn url="#" value="Explore Games" class="btn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>

    }
}