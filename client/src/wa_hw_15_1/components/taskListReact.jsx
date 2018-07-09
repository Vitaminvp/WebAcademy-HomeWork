import  * as React from 'react';
import {Ajax} from './../utils/ajax';
import './../styles/taskList.scss';

const URLEXT = "https://evening-dawn-11092.herokuapp.com/comments";
const URLLOC = "http://localhost:4001/comments";



export class TaskList2 extends React.Component {

    constructor(){
        super();
        this.state = {
          list: [],
          title: '',
          comment: ''
        };
        Ajax.get(URLLOC, (response) => {
            this.setState( {list: response} );
        });
    }

    addComment(e){
        Ajax.post(URLLOC, {
                             author: this.state.title,
                             text: this.state.comment
        }, (response) => {
            console.log(response);
            this.setState({
                list: this.state.list.concat([response]),
                // title: '',
                // comment: ''
            });
        });

        e.preventDefault();
    }
    inputHandler(e){
        this.setState({
            list: this.state.list,
            title: e.target.value,
            comment: this.state.comment,
        });
    }
    textHandler(e){
        this.setState({
            list: this.state.list,
            title: this.state.title,
            comment: e.target.value
        });
    }



    render(){
        const listArray = [];
        this.state.list.forEach( (item) => {
            const comment = <li className='comment' key={item.id}>
                                <h2 className='comment__title'>{item.author}</h2>
                                <div className='comment__content'>
                                    {item.text}
                                </div>
                                <div className='comment__date'>
                                   {item.date}
                                </div>
                            </li>;
            listArray.push(comment);
        });
        return  <div className="comments">
                <form onSubmit={this.addComment.bind(this)}>
                    <input type="text" required={true} value={this.state.title} onInput={this.inputHandler.bind(this)}/>
                    <textarea  required={true} value={this.state.comment} onInput={this.textHandler.bind(this)}></textarea>
                    <button>Add comment</button>
                </form>
                <ul>
                    {listArray}
                </ul>
                </div>
    }
}
