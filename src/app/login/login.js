import React, {Component} from 'react';
import BrandHeader from '../common/brand-header';
import LoadingOverlay from '../common/loadingOverlay';
import GoogleLogo from '../../assets/google-icon.svg';
import LoginForm from './login-form';
import './login.scss';
import $ from 'jquery';
import LoginServices from './login-service'

class AlertBox extends Component {
    componentDidMount () {
         $('.toast').toast({
             animation: true,
             delay: 1500,
             autohide: true
         })
    }
    
    render () {
        return <div className="toast" style={{position: "absolute", top: "20px", right: "0", 
        backgroundColor: "rgba(255, 255, 255, 0.7)"}}>
          <div className="toast-body">
                This functionality is not available
          </div>
        </div>
    }
}

class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {showLoader: false, showToast: false};
    }

    showLoader = () => {
        this.setState({showLoader: true});
    }

    hideLoader = () => {
        this.setState({showLoader: false});
    }

    onLogin = (user) => {
        this.setState({showLoader: false});
        localStorage.setItem('user', JSON.stringify(user));
        this.props.history.replace( '/' );
    }

    showAlert = () => {
        if(!this.state.showToast){
            $('.toast').toast('show');
            this.setState({showToast:true});
            setTimeout(()=>{
                this.setState({showToast:false});
            },1600)
        }
    }

    render () {
        return (
            <div className="login-page">
                <LoadingOverlay showLoader={this.state.showLoader}/>
                <BrandHeader />
                <AlertBox />
                <div className="login-container">
                    <header>
                        <h2>Login</h2>
                        <div className="font-14">with</div>
                        <div onClick={()=>{this.showAlert();}} className="login-logo-container">
                            <img className="google-icon" src={GoogleLogo} alt="google-icon"/>
                            <span>Google</span>
                        </div>
                        <div className="font-14">or</div>
                    </header>
                    <LoginForm onLogin={this.onLogin} hideLoader={this.hideLoader} showLoader={this.showLoader}
                         showAlert={this.showAlert} history = {this.props.history}/>
                </div>
            </div>
        );
    }
}

export default LoginScreen;