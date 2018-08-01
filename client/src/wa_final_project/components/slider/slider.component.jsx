import * as React from 'react';
import { Slide } from './slide/slide.component.jsx'
import './slider.component.scss';
export class Slider extends React.Component{
    constructor(){
        super();
        this.state ={
            slideIndex: 0
        };
        this.Interval = 0;
        this.slidesAmount = 0;
    }
    componentDidMount(){
        this.startInterval();
    }
    startInterval(){
        this.Interval = setInterval(() => {
            let activeSlide = this.state.slideIndex;
            let nextSlide = activeSlide < this.slidesAmount - 1 ? ++activeSlide : 0 ;
            this.setState({slideIndex: nextSlide});

        }, 2000);
    }
    stopInterval(){
        clearInterval(this.Interval);
    }
    render(){
        const arr = [
            {
                id: 1,
                title: 'Star Wars',
                title2: 'Battlefront II',
                text: 'Computer users and programmers have become so accustomed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?'
            },
            {
                id: 10,
                title: 'Wars Star',
                title2: ' Battlefront III',
                text: 'Users and programmers have become so accustomed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?'
            },
            {
                id: 20,
                title: 'Wars',
                title2: ' Battlefront IV',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?'
            },
            {
                id: 30,
                title: 'Test',
                title2: 'Battlefront Test',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?'
            }
        ];
        this.slidesAmount = arr.length;
        let slides = [];
        slides = arr.map((item, i) => {
            return      <Slide key = {item.id} item = {item}  isActive = {this.state.slideIndex == i}/>;
        });
        return  (    <section className="slider" onMouseMove={this.stopInterval.bind(this)} onMouseLeave={this.startInterval.bind(this)}>
                            {slides}
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