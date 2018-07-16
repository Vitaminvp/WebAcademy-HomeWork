import * as React from 'react';
import {ListItem} from "../listItem/listItem.jsx";

export class ContentComponent extends React.Component{
    constructor(){
        super();
    }
    onChange(changedItem){
        console.log("changeOnContent", changedItem);
        this.props.changeOnTask(changedItem);
    }
    onContentBtnDel(element){
        this.props.onDelete(element);
    }
    render(){
        const listArray = this.props.taskList.map( (item) =>
            <ListItem
                key={item.id}
                onDelete={this.onContentBtnDel.bind(this)}
                listItem={item}
                changeOnContent={this.onChange.bind(this)}
            />);
        return  <div className="tasks__content">
                    <ul>
                        { listArray }
                    </ul>
                </div>
    }
}