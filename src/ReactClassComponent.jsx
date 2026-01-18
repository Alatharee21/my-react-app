import React from 'react';

class Car extends React.Component{
    render(){
        return <h2>Hi, I am a CAr!</h2>
    }
}

class Car2 extends React.Component{
    constructor(){
        super()
        this.state = {color: "red"};
    }

    render(){
        return <h2>I am a {this.state.color} CAR</h2>;
    }
}

//export default Car
export default Car2