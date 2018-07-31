import * as React from 'react';
import './slider.component.scss';
export class Slider extends React.Component{
    render(){
        return  (    <section className="slider">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5 offset-md-7">
                                        <div className="iblock">
                                            <div className="iblock_title">Star Wars <span>Battlefront II</span></div>
                                            <div className="iblock_text">Computer users and programmers have become so accustomed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?</div>
                                            <div className="iblock_buttons"><a href="#" className="btn btn-green">Watch Trailer</a><a href="#" className="btn">Explore Games</a></div>
                                        </div>
                
                                    </div>
                                </div>
                
                            </div>
                            <div className="slider__arrows">
                                <div className="slider__arrows_prev"><i className="icon-icon-prev">&nbsp;</i></div>
                                <div className="slider__arrows_next"><i className="icon-icon-next">&nbsp;</i></div>
                            </div>
                            <div className="slider_dots">
                                <ul>
                                    <li className="active"><a href="#">&nbsp;</a></li>
                                    <li><a href="#">&nbsp;</a></li>
                                    <li><a href="#">&nbsp;</a></li>
                                    <li><a href="#">&nbsp;</a></li>
                                    <li><a href="#">&nbsp;</a></li>
                                </ul>
                            </div>
                        </section>);

    }
}