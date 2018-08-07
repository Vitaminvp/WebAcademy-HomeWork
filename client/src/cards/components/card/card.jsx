import * as React from 'react';

const generateId = () => {
    return '_'+Math.random().toString(36).substr(2, 9);
}

export class MyCard extends React.Component {
    constructor(){
        super();
    }


    render(){
        const pictures = this.props.imgsrc.map((item)=>{
            return <img key = {generateId()} src={'./../assets/' + item} alt=""/>;
        });
        return <div>{pictures}</div>;
    }

}



