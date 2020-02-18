import React, { Component } from 'react'
import './index.css'

let TimeId = null;

export default class Footer extends Component {
    constructor(){
        super()
        this.state={
            list: []
        };

    }

    componentDidMount(){
       
        this.setState({
            list: this.props.data
        })
        this.scroll(32);
    }

    render() {
        return (
            <div className = "newPosition-list">
                <div className = 'more-positon'>
                    <span>最新职位</span>
                    <span className ="more">更多</span>
                </div>
                <ul className="position-list" onMouseEnter = {() => {this.Enter()}} onMouseLeave = {() => {this.Leave()}} >
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <span className = "position" title={item.name}>{item.name}</span>
                                <em className = "time">{item.time}</em>
                                <em className = "city">{item.address}</em>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        );
    }
   
    scroll (time, top = 50) {
        let that = this;
        let endTop=300-50*this.state.list.length
        console.log(endTop)
        let UL = document.querySelector('.position-list');
        TimeId = setInterval(move, time);
        function move () {
            if ( top < endTop) {
                clearInterval(TimeId);
                top = 50;
                that.scroll(32);
            } else {
                top --;
                UL.style.top = top + 'px';
            }
        }
    }
    Enter(){
        clearInterval(TimeId);
    }
    Leave(){
        let UL = document.querySelector('.position-list') ;
        let top = parseInt(UL.style.top);
        this.scroll(32, top)
    }
}