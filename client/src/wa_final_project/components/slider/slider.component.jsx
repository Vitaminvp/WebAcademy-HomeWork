import * as React from 'react';
import { Slide } from './slide/slide.component.jsx'
import './slider.component.scss';
import {Dot} from "./dot/dot.component.jsx";
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
    enableSlide(i){
        this.setState({slideIndex: i});
    }
    prevSlide(){
        let activeSlide = this.state.slideIndex;
        let slidesAmount = this.slidesAmount;
        let nextSlide = activeSlide > 0 ? --activeSlide : --slidesAmount;
        this.setState({slideIndex: nextSlide});
    }
    nextSlide(){
        let activeSlide = this.state.slideIndex;
        let slidesAmount = this.slidesAmount;
        let nextSlide = activeSlide < --slidesAmount ? ++activeSlide : 0;
        this.setState({slideIndex: nextSlide});
    }
    render(){
        const arr = [
            {
                id: 1,
                title: 'Star Wars',
                title2: 'Battlefront II',
                text: 'Computer users and programmers have become so accustomed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?',
                bgimg: 'carousel.jpg'
            },
            {
                id: 10,
                title: 'Wars Star',
                title2: ' Battlefront III',
                text: 'Users and programmers have become so accustomed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?',
                bgimg: 'rectangle.jpg'
            },
            {
                id: 20,
                title: 'Wars',
                title2: ' Battlefront IV',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?',
                bgimg: 'ranked-callofduty-lead.jpg'
            },
            {
                id: 30,
                title: 'Test',
                title2: 'Battlefront Test',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere in incidunt laborum repellat velit vitae voluptas voluptatem voluptatum?',
                bgimg: 'call-of-duty-ww-2-review-j-23-m.jpg'
            }
        ];
        this.slidesAmount = arr.length;
        let slides = [];
        let dots = [];
        let isActive = false;
        arr.forEach((item, i) => {
            isActive = (this.state.slideIndex == i ) ? true : false ;
            dots.push(<Dot key = {item.id} isActive = {isActive} i = {i}  click={this.enableSlide.bind(this)} />);
            slides.push(<Slide key = {item.id} item = {item}  isActive = {isActive}/>);
        });
        return <section className="slider" onMouseMove={this.stopInterval.bind(this)} onMouseLeave={this.startInterval.bind(this)}>
                    {slides}
                    <div className="slider__arrows">
                        <div className="slider__arrows_prev"><i className="icon-icon-prev" onClick={this.prevSlide.bind(this)}>&nbsp;</i></div>
                        <div className="slider__arrows_next"><i className="icon-icon-next" onClick={this.nextSlide.bind(this)}>&nbsp;</i></div>
                    </div>
                    <div className="slider_dots">
                        <ul>
                            {dots}
                        </ul>
                    </div>
                </section>;
    }
}