import React from 'react';
import Article from './article';

export default class ArticleList extends React.Component {
    constructor(){
        super();
    }
    render(){
        const articles = this.props.articles.map((article) => <li key={article.id}><Article article={article}/></li>);
        return <ul>
                {articles}
               </ul>
    }
}