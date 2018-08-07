import * as React from 'react';
import { Ajax } from './../../utils/ajax';
const URL = 'https://ec-test-react.herokuapp.com/';

const generateId = () => {
    return '_'+Math.random().toString(36).substr(2, 9);
};

export class MyCard extends React.Component {
    constructor(){
        super();
    }


    render(){
        let imgStyle = {
            width: "100px",
            height: "100px"
        };
        Ajax.get(`${URL}api/v1/items`, (response) => {
            imgStyle = Object.assign({}, response);
             console.log(imgStyle);
        });
        const pictures = this.props.imgsrc.map((item)=>{
            return <img key = {generateId()} src={'./../assets/' + item} style={ imgStyle } alt=""/>;
        });
        return <div>{pictures}</div>;
    }

}



