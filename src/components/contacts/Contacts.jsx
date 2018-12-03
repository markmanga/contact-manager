import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Contacts extends Component {
    state = {
        showContactInfo: false,
    }

    onClickHandler = async (id, dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        } catch (e) {
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        }
    }

    render() {
        const { showContactInfo } = this.state;
        const { id, name, email, phone } = this.props.contacts;
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="Contacts">
                                <div className="card">
                                    <div className="card-header">{name}
                                        <i className="fas fa-sort-down" onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}></i>
                                        <span className="icon-padding-left">
                                            <Link to={`contact/edit/${id}`}><i className="fas fa-pencil-alt"></i></Link>
                                        </span>
                                        <span className="icon-padding-top">
                                            <i className="fas fa-times justify-content-end" onClick={this.onClickHandler.bind(this, id, dispatch)}></i>
                                        </span>
                                    </div>
                                    {
                                        showContactInfo ? (
                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <li className="list-group-item">{email}</li>
                                                    <li className="list-group-item">{phone}</li>
                                                </ul>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        );
                    }
                }
            </Consumer>
        )
    }
}

Contacts.propTypes = {
    contacts: PropTypes.object.isRequired,
}

export default Contacts;