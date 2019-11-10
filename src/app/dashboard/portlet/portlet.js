import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class Portlet extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        let {portlet, links, index} = this.props;
        let lastupdated = new Date(portlet.lastupdated);
        const options = {year: 'numeric', day: 'numeric', month: 'long' };

        return  (<div className={`card courses portlet-card-${index%7+1}`}>
            <div className="card-body"> 
                <div className={`mb-2 course-subtitle`}>{portlet.type}</div>
                <h5 className="card-title text-bold">{portlet.name}</h5>                                
                <p className="card-text">{portlet.description}</p>
                <p className="card-text mtm updat-info">Title: {portlet.title       }</p>
                <div className={`quater-circle circle`}></div>
                <div className={`half-circle circle`}></div>
                <div className="box-hover box"><div>EXPLORE</div></div>
            </div>
        
        </div>); 
    }
}

export default Portlet;