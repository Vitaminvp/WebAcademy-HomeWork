import * as React from 'react';
import {Best} from "../best/best.component.jsx";
import {Game} from "../games/game.component.jsx";
import {Design} from "../design/design.component.jsx";
export class Home extends React.Component{
    render(){
        return  <div>
                    <Best/>
                    <Game/>
                    <Design/>
                </div>;

    }
}