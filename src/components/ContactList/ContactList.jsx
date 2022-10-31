import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ContactList.module.css'

class ContactList extends Component {
  static propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ul className={css.contactList}>
        {contacts.map(({ name, number, id }) => (
          <li className={css.contactListItem}
          key={name}>
            {name}:{number}
            <button className={css.button} type="button" id={id} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
