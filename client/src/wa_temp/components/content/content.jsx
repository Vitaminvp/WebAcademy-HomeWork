import * as React from 'react';
import { CheckBox } from "../checkbox/checkbox.jsx"

export class ContentComponent extends React.Component{
    constructor(){
        super();
    }
    render(){
        const listArray = this.props.taskList.map( (item) => {
            return (<li key={item.id}><CheckBox checked={ item.completed } /><span>{ item.title }</span></li>);
        });
        return  <div className="tasks__content">
                    <ul>
                        { listArray }
                    </ul>
                </div>
    }
}