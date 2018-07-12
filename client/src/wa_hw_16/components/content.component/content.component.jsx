import * as React from 'react';
import './content.component.scss';
export class Content extends React.Component{
    constructor(){
        super();
    }
    btnClickHandler(item){
        console.log(item.id);
        this.props.delete(item);
    }
    render(){
        const listArray = [];
        this.props.list.forEach( (item) => {
            let date = new Date( Date.parse(item.date) );
            date = date.getFullYear() + '-' +
                ('00' + (date.getMonth()+1)).slice(-2) + '-' +
                ('00' + date.getDate()).slice(-2) + ' in ' +
                ('00' + date.getHours()).slice(-2) + ':' +
                ('00' + date.getMinutes()).slice(-2) + ':' +
                ('00' + date.getSeconds()).slice(-2);
            const comment = <li key={item.id} className='comment'>
                <h2 className='comment__title'>{item.author}</h2>
                <div className='comment__content'>
                    {item.text}
                </div>
                <div className='comment__date'>
                    {date}
                </div>
                <button className="comment__btn" onClick={()=>{this.btnClickHandler(item)}}>&nbsp;</button>
            </li>;
            listArray.push(comment);
        });
        return  <ul>
                    {listArray}
                </ul>
    }
}