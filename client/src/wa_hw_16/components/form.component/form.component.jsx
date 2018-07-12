import * as React from 'react';

export class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            comment: ''
        };
    }
    inputHandler(e){
        this.setState({
            title: e.target.value,
            comment: this.state.comment,
        });
    }
    textHandler(e){
        this.setState({
            title: this.state.title,
            comment: e.target.value
        });
    }
    submitHendler(event){
        event.preventDefault();
        this.props.submit(this.state.title, this.state.comment);
        this.setState({
            title: '',
            comment: ''
        });
    }
    render(){
        return  <form onSubmit={this.submitHendler.bind(this)}>
                    <input type="text" required={true} value={this.state.title} onInput={this.inputHandler.bind(this)} placeholder="Enter your Name"/>
                    <textarea  required={true} value={this.state.comment} onInput={this.textHandler.bind(this)}  placeholder="Enter your comment"></textarea>
                    <button type="submit">Add comment</button>
                </form>
    }
}