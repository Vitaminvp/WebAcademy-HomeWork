import * as React from 'react';
import './nav.component.scss';
import {Items} from "./menuitems/menuitems.component.jsx";
export class Nav extends React.Component{
    render(){
        return   (
                                <nav className="header__nav">
                                    <div className="header__nav_control">
                                        <a href="#" className="toggle-mnu"><span>&nbsp;</span></a>
                                    </div>
                                    <ul className="header__nav_menu">
                                        <Items />
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