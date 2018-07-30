import * as React from 'react';
import { render } from 'react-dom';
import ArticleList from './js/components/articleList';
import { articles } from './js/fixtures';

render(<ArticleList articles={articles}/>, document.getElementById('app'));