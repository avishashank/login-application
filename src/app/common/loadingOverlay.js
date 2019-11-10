import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner, faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSpinner, faCircleNotch);
export default function LoadingOverlay (props) {
    return (
        <div>
            {props.showLoader && <div style={Object.assign({},styles,props.styles)}>
            <FontAwesomeIcon style={Object.assign({color: '#bbb'},props.loaderColor)} 
                    className="fa-3x fa-pulse" icon="spinner" aria-hidden="true" />
            </div>}
        </div>
    );
}

const styles = {
    userSelect: 'none',
    bottom: '0',
    height:'100%',
    paddingTop: '350px',
    left: '0',
    margin: 'auto',
    position: 'absolute',
    right: '0', 
    textAlign: 'center',
    top: '0',
    width: '100%',
    zIndex: '2000'
}