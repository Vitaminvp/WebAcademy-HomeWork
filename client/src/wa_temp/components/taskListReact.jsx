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
        console.log("changeOnTask", task);
        Ajax.put(`${LOC}/${task.id}`, task, (response) => {
            this.setState((state) => {
                state.taskList.forEach((item, i, arr) => {
                    if(item.id == response.id){
                        arr[i] = response;
                    }
                });
                return state;
            });
        });
    }
    onDelete(task){
        Ajax.delete(`${LOC}/${task.id}`,  (response) => {

            const newTaskList = this.state.taskList.filter((item) => {
                return item.id !== task.id;
            });
            this.setState({
                taskList: newTaskList
            });
            // this.setState((state) => {
            //             state.taskList.splice(state.taskList.indexOf(task),1);
            //             return state;
            //     });
            // });
        });
    }
    render(){
        return <div className="tasks">
                    <HeaderComponent onSubmit={this.submitForm.bind(this)}/>
                    <ContentComponent
                        taskList={this.state.taskList}
                        changeOnTask={this.changeTask.bind(this)}
                        onDelete={this.onDelete.bind(this)}
                    />
                    <FooterComponent />
               </div>
    }

}

