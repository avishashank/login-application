import React from 'react';
import Masonry from 'react-masonry-component';
import Portlet from './portlet';

export default class PortletList extends React.Component {
    constructor (props) {
        super(props);
        this.masonryOptions = {
            horizontalOrder: true
       };
    }

    render () {
        return (
            <div>
                {this.props.name !== "default" && <h4 className="mlxxl text-bold">{this.props.name}</h4>}
                <div className="course-grid"> 
                    <Masonry options={this.masonryOptions}>
                        {this.props.portlets.map((portlet, index) => <Portlet key={portlet.portlet._id} 
                                portlet={portlet.portlet} links={portlet.links} index={index} />)}
                    </Masonry> 
                </div>
        </div>);
    }
}