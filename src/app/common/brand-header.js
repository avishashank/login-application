import React from 'react';

export default function BrandHeader() {
    return (
        <div style={divStyles}>
            <span style={portalStyles}>Study Portal</span>
        </div>
    );
}

const divStyles = {
    color: 'white',
    fontSize: '30px',
    margin: '4px 14px',
}

const portalStyles ={
    marginLeft: "10px",
    position: "absolute",
    top:"6px",
    fontSize:"27px"
}