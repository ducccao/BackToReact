import React, { Component } from 'react';

interface IHelloMessageProps{
    name:string;
}

interface IHelloMessageState{

}

class TypeScript extends Component<IHelloMessageProps,IHelloMessageState> {


    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default TypeScript;