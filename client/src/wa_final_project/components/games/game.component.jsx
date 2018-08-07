import * as React from 'react';
import { Btn } from "../button/button.component.jsx";
import './game.component.scss';
export class Game extends React.Component{
    constructor(){
        super();
        this.movelength = 0;
        this.state = {
            left: 0
        };
     }
    moveRight(){
        if( this.state.left <= 1000 ){
            this.setState({left: this.state.left + 50});
        } else {
            this.setState({left: 0});
        }
    }
    moveLeft(){
        if( this.state.left <= -1000 ){
            this.setState({left: 0});
        } else {
            this.setState({left: this.state.left - 50});
        }
    }
    render(){
        return  (
            <section className="games">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Exclusive games on XBOX</h3>
                        </div>
                        <div className="slider__arrows slider__arrows-game">
                            <div className="slider__arrows_prev" onClick={ this.moveRight.bind(this) }><i className="icon-icon-prev">&nbsp;</i></div>
                            <div className="slider__arrows_next" onClick={ this.moveLeft.bind(this) }><i className="icon-icon-next">&nbsp;</i></div>
                        </div>
                        <div className="col-md-12 d-flex">
                            <div className="d-flex card-wrapper" style={{left : this.state.left + 'px'}  }>
                                <div className="card" >
                                    <div className="card__img">
                                        <img src="./../assets/images/call-of-duty-ww-2-review-j-23-m.jpg" alt="" />
                                    </div>
                                    <div className="card__content">
                                        <div className="card__content_name">Call of Duty: WWII</div>
                                        <div className="card__content_title">The C.O.D.E. Bravery Pack is now available in WWII</div>
                                        <div className="card__content_link">
                                            <Btn url="/topic" value="See Details" class="btn card-btn btn-green"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card__img">
                                        <img src="./../assets/images/ranked-callofduty-lead.jpg" alt="" />
                                    </div>
                                    <div className="card__content">
                                        <div className="card__content_name">Destiny 2</div>
                                        <div className="card__content_title">Photographs are a way of preserving a moment in our lives for the rest of our lives. </div>
                                        <div className="card__content_link">
                                            <Btn url="/topic" value="See Details" class="btn card-btn btn-green"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card__img">
                                        <img src="./../assets/images/img.png" alt="" />
                                    </div>
                                    <div className="card__content">
                                        <div className="card__content_name">STEEP</div>
                                        <div className="card__content_title">Here, I focus on a range of items and features that we use in life without giving them</div>
                                        <div className="card__content_link">
                                            <Btn url="/topic" value="See Details" class="btn card-btn btn-green"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card__img">
                                        <img src="./../assets/images/xbox-one-x.jpg" alt="" />
                                    </div>
                                    <div className="card__content">
                                        <div className="card__content_name">Forza Motorsport 7</div>
                                        <div className="card__content_title">The Myspace page defines the individual, his or her characteristics, traits.</div>
                                        <div className="card__content_link">
                                            <Btn url="/topic" value="See Details" class="btn card-btn btn-green"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card__img">
                                        <img src="./../assets/images/call-of-duty-ww-2-review-j-23-m.jpg" alt="" />
                                    </div>
                                    <div className="card__content">
                                        <div className="card__content_name">Forza Motorsport 7</div>
                                        <div className="card__content_title">The Myspace page defines the individual, his or her characteristics, traits.</div>
                                        <div className="card__content_link">
                                            <Btn url="/topic" value="See Details" class="btn card-btn btn-green"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <div className="game__link">
                                <Btn url="/topic" value="XBOX Store" class="btn btn-game"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}