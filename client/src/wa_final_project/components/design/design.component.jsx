import * as React from 'react';
import {Btn} from "../button/button.component.jsx";
import './design.component.scss';
export class Design extends React.Component{
    render(){
        return  (
            <section className="design">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="iblock iblock-design">
                                <div className="iblock_title">Xbox Design Lab</div>
                                <div className="iblock_text">Make yours one in a billion with new colors, metallic finishes and rubberized grips.</div>
                                <div className="iblock_buttons">
                                    <Btn url="#" value="Design Yours" class="btn btn-design"/>
                                    <Btn url="#" value="Explore Consoles & Accessories" class="btn btn-green btn-design"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );

    }
}