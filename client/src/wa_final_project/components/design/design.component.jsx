import * as React from 'react';
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
                                <div className="iblock_buttons"><a href="#" className="btn btn-design">Design Yours</a><a href="#" className="btn btn-green btn-design">Explore Consoles & Accessories</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );

    }
}