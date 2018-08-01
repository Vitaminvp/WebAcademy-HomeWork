import * as React from 'react';
import { appConfig } from './../../../config';
import { Ajax } from '../../../utils/ajax';
import { SubmenuItems } from "./submenuitems/submenuitems.component.jsx";
import './menuitems.component.scss';
export class Items extends React.Component{
    constructor(){
        super();
        this.state = {
            menuItems: []
        };
    }
    componentDidMount(){
        Ajax.get(`${appConfig.apiUrl}/menu`, (resp) => {
            this.setState({
                menuItems: resp
            });
        });
    }
    render(){
        const menulistItems = this.state.menuItems.map((item) => {
            if (!item.submenu){
                return <li key = {item.id}  className="header__nav_item"><a href={item.url}>{item.title}</a></li>
            } else{
                return <li key = {item.id} className="header__nav_item header__nav_item-expand"><a href={item.url}>{item.title}</a>
                            <ul className="submenu">
                                <SubmenuItems submenu = {item.submenu}/>
                            </ul>
                        </li>
            }
        });
        return   menulistItems;
    };
};