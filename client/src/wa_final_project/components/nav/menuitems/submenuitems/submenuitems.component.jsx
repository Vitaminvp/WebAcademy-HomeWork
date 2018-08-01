import * as React from 'react';
import './submenuitems.component.scss';

export class SubmenuItems extends React.Component{
    render(){
        const submenuItems = this.props.submenu.map((item) => {
                return <li key = {item.id}><a href={item.url}>{item.title}</a></li>
        });
        return   submenuItems;
    };
};