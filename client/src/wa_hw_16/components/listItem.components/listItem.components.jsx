import * as React from 'react';
export class ListItem extends React.Component{
    constructor(){
        super();

        this.isChangeble = false;
        this.state = {
            title: '',
            comText: '',
            hideClass: 'comment__content'
        };

    }
    toggleTextArea(e){
        console.log("e.target.value", e.target.textContent);

        this.setState({
            title: this.state.title,
            comText: e.target.textContent
        });
        // console.log("this.state", this.state);

        if(this.isChangeble){
            this.setState({ hideClass: 'comment__content'});
        } else {
            this.setState({ hideClass: 'comment__content comment__content_hide'});
        }
        this.isChangeble = !this.isChangeble;
    }

    btnClickHandler(){
        this.props.delete(this.props.commItem);
    }
    changeComment(e){
        this.setState({
            title: this.state.title,
            comText: e.target.value
        });
        // console.log('this.state.comText', this.state.comText);
    }
    onConfirmChange(itemEl){
        const changedItem = Object.assign({}, itemEl);
        // console.log("changedItem", changedItem);
        changedItem.text = this.state.comText;
        this.props.onConfirmChange(changedItem);

        if(this.isChangeble){
            this.setState({ hideClass: 'comment__content'});
        } else {
            this.setState({ hideClass: 'comment__content comment__content_hide'});
        }
        this.isChangeble = !this.isChangeble;
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



        // console.log("item.text", item.text);
        // console.log("item.author", item.author);

        return  <li className='comment'>
                    <h2 className='comment__title'>{item.author}</h2>
                    <div className={this.state.hideClass} >
                        <div onDoubleClick={this.toggleTextArea.bind(this)}>
                            {item.text}
                        </div>
                        <textarea  value={this.state.comText}  onChange={this.changeComment.bind(this)}>&nbsp;</textarea>
                        <button className="btn" onClick={() => this.onConfirmChange(item)}><i className="fas fa-wrench"></i></button>
                    </div>


                     <div className='comment__date'>
                        {this.getDate(item.date)}
                    </div>
                    <button className="comment__btn" onClick={this.btnClickHandler.bind(this)}>&nbsp;</button>
                </li>
    }
}