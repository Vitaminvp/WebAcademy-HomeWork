import * as React from 'react';
import './callofduty.component.scss';
import {Btn} from "../../button/button.component.jsx";
export class CallOfDuty extends React.Component{
    render(){
        return  (
            <section className="callofduty">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Call of Duty: WWII</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="text-center callofduty__text">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck of your home or having a powerful but mobile telescope set up to take to the remove countryside to really get a good shot at some breath taking star gazing.</div>
                            <div className="text-center">
                                <Btn url="#" value="Order Now" class="btn btn-green"/>
                                <Btn url="#" value="Technical Specifications" class="btn"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="callofduty__img"><img src="./../assets/images/video.jpg" alt="" /></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 ">
                            <h2 className="callofduty__h2">Life Advice Looking Through A Window</h2>
                            <div className="callofduty__text">Shure’s Music Phone Adapter (MPA) is our favorite iPhone solution, since it lets you use the headphones you’re most comfortable with. It has an iPhone-compatible jack at one end and a microphone module with an Answer/End/Pause button and a female 3.5mm audio jack for connecting to your own headphones.</div>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div className="callofduty__img"><img src="./../assets/images/iw-key-art.png" alt="" /></div>
                        </div>
                        <div className="col-md-6 order-sm-1 order-md-0">
                            <div className="callofduty__img"><img src="./../assets/images/ranked-callofduty-lead.jpg" alt="" /></div>
                        </div>
                        <div className="col-md-5 offset-md-1 order-sm-0 order-md-1">
                            <h2 className="callofduty__h2">The Best Answers</h2>
                            <div className="callofduty__text">According to the research firm Frost & Sullivan, the estimated size of the North American used test and measurement equipment market was $446.4 million in 2004 and is estimated to grow to $654.5 million by 2011. For over 50 years, companies and governments have procured.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="callofduty__h2 text-center">Technical Specifications</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="callofduty__text">
                                <p>Computer Hardware Desktops And Notebooks And Handhelds Oh My</p>
                                <p>Microsoft Patch Management For Home Users</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="callofduty__text">
                                <p>For Women Only Your Computer Usage Could Cost You Your Job</p>
                                <p>Going Wireless With Your Headphones</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="callofduty__text">
                                <p>Party Jokes Startling But Unnecessary</p>
                                <p>Get The Boot A Birds Eye Look Into Mcse Boot Camps</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="callofduty__text">
                                <div className="text-center">
                                    <Btn url="#" value="XBOX Consoles" class="btn"/>
                                    <Btn url="#" value="Start streaming on mixer" class="btn btn-green"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );

    }
}