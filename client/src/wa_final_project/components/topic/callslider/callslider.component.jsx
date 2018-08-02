import * as React from 'react';
import './callslider.component.scss';
import {Btn} from "../../button/button.component.jsx";
export class CallSlider extends React.Component{
    render(){
        return  <section className="callslider">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 offset-md-7">
                                <div className="iblock">
                                    <div className="iblock_title">Star Wars <span>Battlefront II</span></div>
                                    <div className="iblock_text">Computer users and programmers have become so accustomed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?</div>
                                    <div className="iblock_buttons">
                                        <Btn url="#" value="Order Now" class="btn btn-green"/>
                                        <Btn url="#" value="More  Games" class="btn btn-green"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>;

    }
}