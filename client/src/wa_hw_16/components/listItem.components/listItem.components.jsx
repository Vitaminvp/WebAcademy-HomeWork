import * as React from 'react';
export class ListItem extends React.Component{
    constructor(){
        super();
        this.setState({
            author: this.props.commItem.author,
            comText: this.props.commItem.text
        });
    }
    btnClickHandler(){
        this.props.delete(this.props.commItem);
    }
    changeComment(){
        console.log('onDoubleClick', this.props.commItem.text);
    }
    getDate(data){
        let date = new Date( Date.parse(data) );
        return date.getFullYear() + '-' +
            ('00' + (date.getMonth()+1)).slice(-2) + '-' +
            ('00' + date.getDate()).slice(-2) + ' in ' +
            ('00' + date.getHours()).slice(-2) + ':' +
            ('00' + date.getMinutes()).slice(-2) + ':' +
            ('00' + date.getSeconds()).slice(-2);
    }
    render(){
        const item = this.props.commItem;

        return  <li className='comment'>
                    <h2 className='comment__title'>{item.author}</h2>
                    <div className='comment__content' onDoubleClick={this.changeComment.bind(this)}>
                        {item.text}
                    </div>
                    <div className='comment__date'>
                        {this.getDate(item.date)}
                    </div>
                    <button className="comment__btn" onClick={this.btnClickHandler.bind(this)}>&nbsp;</button>
                </li>
    }
}