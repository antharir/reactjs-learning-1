import React from "react";

export const Hello = (props) => {

    const {name, dept} = props;
    // console.log(props)
    return (
        <div>
            <h1>Hello {name} belongs tto {dept}</h1>
            {props.children} 
        </div>
    );

    //return React.createElement('div', null, React.createElement('h1', null, props.name));
}