import React from 'react';

import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            user: props.user,
            redirect: false
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    logout = () => {
        localStorage.removeItem('user');
        this.props.history.push('/welcome');
    }

    render() {
        return (
            <div className="header">
                <div className="logo-icon">
                    <div className="log-dec">Study Portal</div>
                </div>
                <div className="right-division">
                    <Dropdown tabIndex="-5" className="user-dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            <FontAwesomeIcon className="user-icon icon" icon="user" />
                            {this.state.user.username}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => this.logout()}><FontAwesomeIcon className="logout-icon" icon={faSignOutAlt} />Log out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default Header;