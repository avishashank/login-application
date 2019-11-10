import React, {Component} from 'react';
import Header from '../common/header/header';
import Masonry from 'react-masonry-component';
import './dashboard.scss';
import Portlet from './portlet/portlet'



class ItemCard extends Component {

    constructor (props) {
        super(props);
        this.masonryOptions = {
            horizontalOrder: true
       };
    }

    componentDidMount() {

    }


    render() {
        var portlets =[
            {
                type: "Physics",
                name: "Chapter 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                title: 'Electric Charges and Fields'
            },
            {
                type: "Physics",
                name: "Chapter 2",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                title: 'Electrostatic Potential and Capacitance'
            },
            {
                type: "Physics",
                name: "Chapter 3",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                title: 'Current Electricity'
            },
            {
                type: "Physics",
                name: "Chapter 4",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                title: 'Moving Charges and Magnetism'
            },
            {
                type: "Physics",
                name: "Chapter 5",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                title: 'Magnetism and Matter'
            },
            {
                type: "Physics",
                name: "Chapter 6",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                title: 'Electromagnetic Induction'
            },
            {
                type: "Physics",
                name: "Chapter 7",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
                title: 'Alternating Current'
            },
        ] 
        return(
            <div className="course-grid"> 
                    <Masonry options={this.masonryOptions}>
                        {portlets.map((portlet, index) => <Portlet 
                                portlet={portlet} index={index} />)}
                    </Masonry> 
                </div>
        )
    }

}


export default class Dashboard extends Component {
     constructor(props) {
         super(props);
         this.user = JSON.parse(localStorage.getItem("user")); 
     }

     componentDidMount() {
        if(!this.user) {
            this.props.history.push('/welcome');
        }
     }


    render() {
        return(
            <div>
               {this.user &&  <Header user = {this.user} history = {this.props.history}/>}
                <ItemCard />
            </div>
        )
    }
}   