import * as React from 'react';
import { Link } from "react-router-dom";
import './submenuitems.component.scss';

export class SubmenuItems extends React.Component{
    close(){
        this.props.isOpen();
    }
    render(){
        const submenuItems = this.props.submenu.map((item) => {
                return <li key = {item.id}><Link to={item.url} onClick={this.close.bind(this)}>{item.title}</Link></li>
        });
        return   submenuItems;
    };
};