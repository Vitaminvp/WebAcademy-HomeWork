import * as React from 'react';
import './topic.component.scss';
import { CallOfDuty } from "./callofduty/callofduty.component.jsx";
import { CallSlider } from "./callslider/callslider.component.jsx";
export class Topic extends React.Component{
    render(){
        return  <div>
                    <CallSlider/>
                    <CallOfDuty/>
                </div>;


    }
}