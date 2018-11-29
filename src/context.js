import React, { Component } from 'react';
import axios from 'axios';

const Context  = React.createContext();
const reducer =(state, action)=> {
    switch(action.type) {
        case 'DELETE_CONTACT': return {
            ...state,
            contacts: state.contacts.filter(data => data.id !== action.payload)
        }
        case 'ADD_CONTACTS': return {
            ...state,
            contacts: [...state.contacts, action.payload]
        }
        case 'UPDATE_CONTACTS': return {
            ...state,
            contacts: state.contacts.map(data => (action.payload.id === data.id ? (data = action.payload) : data ))
        }
        default: return { state }
    }
}

export default class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(
                state => reducer(state, action)
            )
        }
    }
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts: res.data});
    }
    render() {
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;