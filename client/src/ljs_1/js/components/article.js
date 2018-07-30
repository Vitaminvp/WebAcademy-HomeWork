import React from 'react';
import Comments from './comments';
import WrappedComponent from './../decorators/toggleOpen'

class Article extends React.Component {


    render(){
        const text = this.props.isOpen?this.props.article.text:null;
        const comments = this.props.article.comments;
        let comment = this.props.isOpen?<Comments com={comments}/>:null;

        return <div>
                    <h3>{this.props.article.title}</h3>
                    <button onClick={this.props.handleClick.bind(this)}>{!this.props.isOpen?'open':'close'}</button>
                    <div>{text}</div>
                    <br />
                    { comment }
                </div>
    }
}

export default WrappedComponent(Article);