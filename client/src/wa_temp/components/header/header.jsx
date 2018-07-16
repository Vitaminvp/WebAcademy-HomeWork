import * as React from 'react';


export class HeaderComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            title: ''
        };
        this.taskTitle = "Заголовок Задач";

    }
    inputHandler(event){
        this.setState({
            title: event.target.value
        })
    };
    submitHandler(event){
        event.preventDefault();
        this.props.onSubmit(this.state.title);
        this.setState({
            title: ''
        })
    }
    render(){
        return  <form className="tasks__header" onSubmit={this.submitHandler.bind(this)}>
                    <h2>{ this.taskTitle }</h2>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.inputHandler.bind(this)}
                      />
                    <button type="submit">add</button>
                </form>;
    }
}
