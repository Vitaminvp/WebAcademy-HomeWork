import * as React from 'react';
export class ListItem extends React.Component{
    constructor(){
        super();
        this.isChangeble = false;
        this.isChangebleTitle = false;
        this.state = {
            title: '',
            comText: '',
            hideClassCom: 'comment__content',
            hideClassTitle: 'comment__title'
        };
    }
    toggleTextArea(e){
        this.setState({
            title: this.state.title,
            comText: e.target.textContent
        });
        if(this.isChangeble){
            this.setState({ hideClassCom: 'comment__content'});
        } else {
            this.setState({ hideClassCom: 'comment__content comment__content_hide'});
        }
        this.isChangeble = !this.isChangeble;
    }

    toggleInput(e){
        this.setState({
            title: e.target.textContent,
            comText: this.state.comText
        });
        console.log(e.target.textContent);
        if(this.isChangebleTitle){
            this.setState({ hideClassTitle: 'comment__title'});
        } else {
            this.setState({ hideClassTitle: 'comment__title comment__title_hide'});
        }
        this.isChangebleTitle = !this.isChangebleTitle;

        console.log("this.isChangebleTitle", this.isChangebleTitle);
    }

    btnClickHandler(){
        this.props.delete(this.props.commItem);
    }
    changeComment(e){
        this.setState({
            title: this.state.title,
            comText: e.target.value
        });
    }
    changeTitle(e){
        this.setState({
            title: e.target.value,
            comText: this.state.comText
        });
    }
    onConfirmChange(itemEl){
        const changedItem = Object.assign({}, itemEl);
        changedItem.text = this.state.comText;
        this.props.onConfirmChange(changedItem);

        if(this.isChangeble){
            this.setState({ hideClassCom: 'comment__content'});
        } else {
            this.setState({ hideClassCom: 'comment__content comment__content_hide'});
        }
        this.isChangeble = !this.isChangeble;
    }

    onConfirmTitleChange(itemEl){
        const changedItem = Object.assign({}, itemEl);
        changedItem.author = this.state.title;
        this.props.onConfirmChange(changedItem);

        if(this.isChangebleTitle){
            this.setState({ hideClassTitle: 'comment__title'});
        } else {
            this.setState({ hideClassTitle: 'comment__title comment__title_hide'});
        }
        this.isChangebleTitle = !this.isChangebleTitle;
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
                    <div  className={this.state.hideClassTitle}>
                        <h2 onDoubleClick={this.toggleInput.bind(this)}>{item.author}</h2>
                        <textarea  value={this.state.title}  onChange={this.changeTitle.bind(this)}>&nbsp;</textarea>
                        <button className="btn" onClick={() => this.onConfirmTitleChange(item)}><i className="fas fa-wrench"></i></button>
                    </div>
                    <div className={this.state.hideClassCom} >
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