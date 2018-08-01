import * as React from 'react';
import { Slider } from "../slider/slider.component.jsx";
import {Best} from "../best/best.component.jsx";
import {Game} from "../games/game.component.jsx";
import {Design} from "../design/design.component.jsx";
export class Home extends React.Component{
    render(){
        return  <div>
                    <Slider/>
                    <Best/>
                    <Game/>
                    <Design/>
                </div>;

    }
}