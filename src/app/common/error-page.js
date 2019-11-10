import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './error-page.scss';
export default class ErrorPage extends Component{
    
    
    componentWillMount() {
      if (!localStorage.getItem('user')) {
        this.props.history.replace('/login');
      }
    }
    
    render(){
        const user = JSON.parse(localStorage.getItem('user'));
        return(
        <div className="error-page">
            {/* {user && <Header user = {user} {...this.props}/>} */}
            <div className="error-container">
                <h1>404</h1>
                <h4>Sorry, the page you are asked for couldn't be found.</h4>
                <Link to="/" style={{textDecoration: 'none',fontSize: "20px"}}>Go back to homepage</Link>
            </div>
        </div>
        )
    }
}   
