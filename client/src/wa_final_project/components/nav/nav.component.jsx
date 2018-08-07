import * as React from 'react';
import './nav.component.scss';
import {Items} from "./menuitems/menuitems.component.jsx";
export class Nav extends React.Component{
    constructor(){
        super();
        this.state = {
            isExpand: false
        };
    }
    toggleOpen(ev){
        ev.preventDefault();
        this.setState({
           isExpand: !this.state.isExpand
        });
    }
    close(){
        this.setState({
            isExpand: false
        });
    }
    render(){
        return   (
                                <nav className="header__nav">
                                    <div className={this.state.isExpand?'header__nav_control on':'header__nav_control'} onClick={this.toggleOpen.bind(this)}>
                                        <a href="#" className="toggle-mnu"><span>&nbsp;</span></a>
                                    </div>
                                    <ul className="header__nav_menu">
                                        <Items isOpen = {this.close.bind(this)}/>
                                        <li className="header__nav_item header__nav_item-search">
                                            <form action="#" method="post" className="header__nav_form">
                                                <input type="text" placeholder="Search" className="header__nav_input" />
                                            </form>
                                        </li>
                                        <li className="header__nav_item header__nav_item-expand"><a href="#">My XBOX</a>
                                            <ul className="submenu">
                                                <li><a href="#" target="_blank">Subparagraph #1</a></li>
                                                <li><a href="#" target="_blank">Subparagraph #2</a></li>
                                                <li><a href="#" target="_blank">Subparagraph #3</a></li>
                                            </ul>
                                        </li>
                                    </ul>

                                </nav>
                            );
    };
};