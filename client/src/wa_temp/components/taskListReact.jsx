import * as React from 'react';
import { Ajax } from './../utils/ajax';

const URL = 'http://localhost:4001/comments';

export class TaskList extends React.Component {
    constructor() {
        super();
        this.listName = 'Task List';
        this.state = {
            list: [],
            title: '',
            comment: ''
        };

        Ajax.get(URL, (resp) => {
            this.setState({list: resp});
        });
    }

    addTask(task) {
        this.setState({
            title: '',
            comment: '',
            list: task
        })
    }

    submitForm(e) {
        e.preventDefault();
        Ajax.post(URL, {author: this.state.title, text: this.state.comment,}, (resp) => {
            this.addTask(resp);
        })
    }

    inputHandler(e) {
        const target = e.target;
        this.setState({
            list: this.state.list,
            title: target.value,
            comment: this.state.comment
        });
    }
    inputHandler2(e) {
        const target = e.target;
        this.setState({
            list: this.state.list,
            title: this.state.title,
            comment: target.value
        });
    }

    render() {
        const listItems = [];

        this.state.list.forEach((item) => {
            const li = <li id={item.id}><div>{ item.author }</div><div>{ item.text } </div> <div>{ item.date }</div></li>;
            listItems.push(li);
        });

        return <div className='task-list'>
            <form className="task-list__header" onSubmit={this.submitForm.bind(this)}>
                <h2>{this.listName}</h2>
                <input type="text" value={this.state.title} onInput={this.inputHandler.bind(this)}/>
                <input type="text" value={this.state.comment} onInput={this.inputHandler2.bind(this)}/>
                <button>Add</button>
            </form>
            <h2>{this.state.title}</h2>
            <div className="task-list__content">
                <ul>
                    { listItems }
                </ul>
            </div>
            <div className="task-list__footer">
                Footer
            </div>
        </div>
    }
}