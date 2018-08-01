import * as React from 'react';
import { Btn } from "../../button/button.component.jsx";
import './slide.component.scss';
export class Slide extends React.Component{

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

            return      <div key = {this.props.item.id} className={ this.props.isActive ? "container slider__slide slider__slide_active" : "container slider__slide"}>
                            <div className="row">
                                <div className="col-md-5 offset-md-7">
                                    <div className="iblock">
                                        <div className="iblock_title">{this.props.item.title} <span>{this.props.item.title2}</span></div>
                                        <div className="iblock_text">{this.props.item.text}</div>
                                        <div className="iblock_buttons">
                                            <Btn url="#" value="Watch Trailer" class="btn btn-green"/>
                                            <Btn url="#" value="Explore Games" class="btn"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;
    }
}