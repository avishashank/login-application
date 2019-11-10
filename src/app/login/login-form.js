import React, {Component} from 'react';
import {Tooltip} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faUser, faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons';
import LoginServices from './login-service';




library.add(faLock, faUser, faEye, faEyeSlash, faKey);
class LoginForm extends Component {

    constructor (props) {
        super(props);
        this.loginServices = new LoginServices();
        this.state = {
            username: "",
            password: "",
            showPassword: false,
            tooltipOpen: false,
            showCode: false,
            verificationCode: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login = ()=>{
        this.loginServices.login({email: this.state.username, password: this.state.password}).then((res,error)=> {
            if(res.data.username) {
                localStorage.setItem("user", JSON.stringify(res.data))
                this.props.history.push('/');
            }
            else {
                alert("username or password is wrong");
            }
            this.props.hideLoader();
        })
    }

    render () {
        return(
        <form onSubmit={(e) => {
            e.preventDefault();
            this.props.showLoader();
            this.login();
        }}>
        <label>
            <FontAwesomeIcon className="icon" icon="user"/>
            <input type="text" value={this.state.username} onChange={this.handleChange}
                placeholder="User Name" name="username" required/>
        </label>
        <label className="password">
            <FontAwesomeIcon className="icon" icon="lock"/>
            <input type={this.state.showPassword ? "text" : "password"} value={this.state.password} onChange={this.handleChange}
                placeholder="Password" name="password" required/>
            <FontAwesomeIcon onClick={() => {this.setState({showPassword: !this.state.showPassword});}}
                className="icon" id="show-password" icon={this.state.showPassword ? "eye" : "eye-slash"}/>
            <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="show-password"
                toggle={() => {this.setState({tooltipOpen: !this.state.tooltipOpen});}}>
                {this.state.showPassword ? "Hide Password" : "Show Password"}   
            </Tooltip>
        </label>
        <a className="forget-password text-grey" onClick={()=>{this.props.showAlert();}}>Forgot Password?</a>
        <div className = "button-bar">
        <button className="portal-button" type="submit">LET'S GO</button>
        <button className="portal-button" type="cancel" onClick = {()=>{this.props.history.push('/welcome')} }>CENCLE</button>
        </div>
    </form>
        );
    }
}

export default LoginForm;