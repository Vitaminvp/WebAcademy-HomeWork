import * as React from 'react';
import {ListItem} from './../listItem.components/listItem.components.jsx';
import './content.component.scss';
export class Content extends React.Component{
    constructor(){
        super();
    }
    btnClickHandler(item){
        this.props.delete(item);
    }
    render(){
        const listArray = this.props.list.map( item => <ListItem key={item.id} commItem={item} delete={this.btnClickHandler.bind(this)}/>);
        return  <ul>
                    {listArray}
                </ul>
    }
}