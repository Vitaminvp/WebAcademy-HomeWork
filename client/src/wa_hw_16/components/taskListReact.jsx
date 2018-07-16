import  * as React from 'react';
import {Ajax} from './../utils/ajax';
import {Form} from "./form.component/form.component.jsx"
import {Content} from "./content.component/content.component.jsx";
import './../styles/taskList.scss';

const URLEXT = "https://evening-dawn-11092.herokuapp.com/comments";
const URLLOC = "http://localhost:4001/comments";



export class TaskList2 extends React.Component {

    constructor(){
        super();
        this.state = {
          list: []
        };
        Ajax.get(URLLOC, (response) => {
            this.setState( {list: response} );
        });
    }
    addComment(title, comment){
        Ajax.post(URLLOC, {
            author: title,
            text: comment
        }, (response) => {
            this.setState({
                list: response // локльный сервер отличается от внешнего где list: this.state.concat([response])
            });
        });

    }
    onConfirmChange(task){
        Ajax.put(`${URLLOC}/${task.id}`, task, (response) => {
            this.setState((state) => {
                state.list.forEach((item, i, arr) => {
                    if(item.id == response.id){
                        arr[i] = response;
                    }
                });
                return state;
            });
        });
    }
    onDelete(task){
        Ajax.delete(`${URLLOC}/${task.id}`,  (response) => {
            this.setState({
                list: response //В моем back-end возвращается массив результирующий.
            });
        });
    }
    render(){
        return  <div className="comments">
                    <Form    submit={this.addComment.bind(this)} />
                    <Content list={this.state.list} delete={this.onDelete.bind(this)} onConfirmChange={this.onConfirmChange.bind(this)}/>
                </div>
    }
}
