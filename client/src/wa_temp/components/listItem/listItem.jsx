import * as React from 'react';
import { CheckBox } from "../checkbox/checkbox.jsx"
import './listItem.scss';

export class ListItem extends React.Component{
    constructor(){
        super();
    }
    onChange(completed){
        const changedItem = Object.assign({}, this.props.listItem);
        changedItem.completed = completed;
        this.props.changeOnContent(changedItem);
        console.log("changeOnListItem", changedItem);
        console.log("this.props.listItem.completed", this.props.listItem.completed);
    }
    render(){
        const lineThrought = (this.props.listItem.completed)? 'list-item list-item__checked' : 'list-item';
        return  <li className={lineThrought} >
                    <CheckBox
                        checked={ this.props.listItem.completed }
                        changeOnListitem={this.onChange.bind(this)}
                    />
                    <span>{ this.props.listItem.title }</span>
                <button className="delete resetbtn">&nbsp;</button>
                </li>
    }
}