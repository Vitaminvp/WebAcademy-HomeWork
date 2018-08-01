import * as React from 'react';
import { Link } from "react-router-dom";
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
    close(){
        this.props.isOpen();
    }
    render(){
        const menulistItems = this.state.menuItems.map((item) => {
            if (!item.submenu){
                return <li key = {item.id}  className="header__nav_item"><a href={item.url} onClick={this.close.bind(this)}>{item.title}</a></li>
            } else{
                return <li key = {item.id} className="header__nav_item header__nav_item-expand"><Link to={item.url} onClick={this.close.bind(this)}>{item.title}</Link>
                            <ul className="submenu">
                                <SubmenuItems submenu = {item.submenu} isOpen = {this.props.isOpen.bind(this)}/>
                            </ul>
                        </li>
            }
        });
        return   menulistItems;
    };
};