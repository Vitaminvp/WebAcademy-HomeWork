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
    changeTask(task){
        console.log("changeOnTask", task.id);
        Ajax.put(`${LOC}/${task.id}`, task, (response) => {
            console.log("response", response);

            this.setState((state) => {
                state.taskList.forEach((item, i, arr) => {
                    if(item.id == response.id){
                        console.log("item.id", item.id);
                        console.log("response.id", response.id);
                        arr[i] = response;
                        console.log("state", state);
                    }
                });
                return state;
            });
        });
    }
    render(){
        console.log("this.state.taskList", this.state.taskList)

        return <div className="tasks">
                    <HeaderComponent onSubmit={this.submitForm.bind(this)}/>
                    <ContentComponent taskList={this.state.taskList} changeOnTask={this.changeTask.bind(this)}/>
                    <FooterComponent />
               </div>
    }

}

