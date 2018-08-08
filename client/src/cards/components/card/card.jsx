import * as React from 'react';
import { MyImg } from "../img/img.jsx";
import { appConfig } from './../../config';
const generateId = () => {
    return '_'+Math.random().toString(36).substr(2, 9);
};

export class MyCard extends React.Component {
    constructor(){
        super();
        this.state = {
            imgClass: "cards__box_img"
        };
        this.firstImg = "";
        this.secondImg = "";
        this.count = 0;
    }
    handleClickInc(firstImg){
        this.count++;
        console.log("firstImg1", firstImg);
        this.secondImg = this.firstImg;
        this.firstImg = firstImg;
        console.log("firstImg", this.firstImg);
        console.log("secondImg", this.secondImg);
        if (this.secondImg == this.firstImg) {
            console.log("Bingo!");
            let arr = this.props.imgsrc.slice();
            for(let i = 0; i < appConfig.magicNumber; i++){
                arr.splice(arr.indexOf(this.firstImg), 1);
                console.log("arr", arr);
            }
            this.props.handlState(arr);
        }
    }
    handleClick(){
        return this.count < appConfig.magicNumber;
    }
    handleClickDec(){
        this.count--;
    }
    render(){
        const pictures = this.props.imgsrc.map((item)=>{
            return <MyImg key = {generateId()} item = {item} handleClickInc = {this.handleClickInc.bind(this)} handleClickDec = {this.handleClickDec.bind(this)} handleClick = {this.handleClick.bind(this)} count = {this.count}/>;
        });
        return <div className="cards__box">{pictures}</div>;
    }

}



