import React , {Component} from 'react';
import './welcome.scss'
import BrandHeader from '../common/brand-header';


export default class Welcome extends Component  {


    render() {
        return (
            <div className = "welcome-page">
            <BrandHeader />
            <div className="welcome-container">
                <h4>This is a course of class 12th Physics</h4>
                <div>Wanna learn some physics ?</div>
                <button className="portal-button" onClick={()=>this.props.history.push('/login')}>LET'S Start</button>
            </div>
            </div>
        )
    }
}
