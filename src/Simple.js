import React from 'react';

const Simple = (props) => {
    return (
        <div className="simple" style={{ backgroundColor: props.color, marginRight: props.space}}>
           Simply: { props.text }
        </div>
    );
} 
export default Simple;