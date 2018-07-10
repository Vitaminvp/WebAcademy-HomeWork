import * as React from 'react';
import { Ajax } from './../utils/ajax';
import './../styles/taskList.scss';
import { HeaderComponent } from "./header/header.jsx";
import { ContentComponent } from "./content/content.jsx"
import FooterComponent from "./footer/footer.jsx"

const LOC = 'http://localhost:4001/list';

export class TaskList extends React.Component {
    constructor(){
        super();
        this.state = {
            taskList: [],
            title: ''
        };
        Ajax.get(LOC, (response) => {
            this.setState({
                taskList: response
            })
        })
    }
    submitForm(inputValue){
        Ajax.post(LOC, {title: inputValue}, (response) => {

            this.setState({
                taskList: this.state.taskList.concat([response]),
                title: ''
            });
        });
    };

    render(){

        return <div className="tasks">
                    <HeaderComponent onSubmit={ this.submitForm.bind(this) }/>
                    <ContentComponent taskList={this.state.taskList}/>
                    <FooterComponent />

               </div>
    }

}

