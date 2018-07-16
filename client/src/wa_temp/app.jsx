import * as React from 'react';
import { render } from 'react-dom';
import { TaskList } from './components/taskListReact.jsx';

render(<TaskList/>, document.querySelector('#app'));