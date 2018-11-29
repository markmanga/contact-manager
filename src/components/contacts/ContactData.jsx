import React from 'react';
import Contacts from './Contacts.jsx';
import { Consumer } from './../../context.js';

const ContactData = () => {

    return (
        <Consumer>
            {
                value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {
                                contacts.map(
                                    data => (
                                        <Contacts key={data.id} contacts={data}></Contacts>
                                    )
                                )
                            }
                        </React.Fragment>
                    );
                }
            }
        </Consumer>
    );
}

export default ContactData;
