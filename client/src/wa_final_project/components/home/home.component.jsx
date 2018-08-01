import * as React from 'react';
import {Header} from "../header/header.component.jsx";
import {Slider} from "../slider/slider.component.jsx";
import {Best} from "../best/best.component.jsx";
import {Game} from "../games/game.component.jsx";
import {Design} from "../design/design.component.jsx";
import {Footer} from "../footer/footer.component.jsx";
export class Home extends React.Component{
    render(){
        return  <div>
                    <Header/>
                    <Slider/>
                    <Best/>
                    <Game/>
                    <Design/>
                    <Footer/>
                </div>;

    }
}