import * as React from 'react';
import {Btn} from "../button/button.component.jsx";
import './best.component.scss';
export class Best extends React.Component{
    render(){
        return  ( 
                    <section className="best">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 d-flex align-items-center justify-content-center flex-column">
                                    <img className="best__logo" src="./../assets/images/xbox-icon@3x.jpg" alt="" />
                                    <h1>The best value <span>in games and entertainment</span></h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 d-flex justify-content-center">
                                    <div className="card">
                                        <div className="card__img">
                                            <img src="./../assets/images/xbox-one-x.jpg" alt=""/>
                                        </div>
                                        <div className="card__content">
                                            <div className="card__content_name">XBOX ONE X</div>
                                            <div className="card__content_title">Faster Processing Smoother Gameplay</div>
                                            <div className="card__content_link">
                                                <Btn url="#" value="Explore Consoles & Accessories" class="btn card-btn btn-green"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4  d-flex justify-content-center">
                                    <div className="card">
                                        <div className="card__img">
                                            <img src="./../assets/images/215535.png" alt="" />
                                        </div>
                                        <div className="card__content">
                                            <div className="card__content_name">mixer Streaming</div>
                                            <div className="card__content_title">The Next Generation<br /> Of Life Game Streaming</div>
                                            <div className="card__content_link">
                                                <Btn url="#" value="Start Watching mixer" class="btn card-btn btn-green"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4  d-flex justify-content-center">
                                    <div className="card">
                                        <div className="card__img">
                                            <img src="./../assets/images/1-c-93.png" alt=""/>
                                        </div>
                                        <div className="card__content">
                                            <div className="card__content_name">Free Games Every Month</div>
                                            <div className="card__content_title">FGet up to $700<br /> in free <br />games</div>
                                            <div className="card__content_link">
                                                <Btn url="#" value="Get Free Games" class="btn card-btn btn-green"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );

    }
}